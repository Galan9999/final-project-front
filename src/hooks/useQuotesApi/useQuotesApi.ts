import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteQuoteByIdActionCreator,
  loadQuotesActionCreator,
} from "../../store/features/quotes/quotesSlice";
import {
  setIsErrorModalActionCreator,
  setIsLoadingActionCreator,
  setIsSuccessModalActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CreateQuoteStructure, QuotesStructure } from "../../types";
import { errorTypes, succesTypes } from "../types";

const { defaultErrorMessage, cuotesNotFoundErrorMessage } = errorTypes;
const { successDeleting, successCreating } = succesTypes;

const quotesRelativePath = "/quotes";
const createRealtivePath = "/create";
const home = "/home";

const useQuotesApi = () => {
  const dispatch = useAppDispatch();
  const uiDispatch = useAppDispatch();
  const navigateTo = useNavigate();
  const {
    user: { token },
  } = useAppSelector((store) => store);

  const loadQuotes = useCallback(async () => {
    try {
      uiDispatch(setIsLoadingActionCreator());
      const response = await fetch(
        `${process.env.REACT_APP_URL_API_USERS}${quotesRelativePath}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(cuotesNotFoundErrorMessage);
        }
        throw new Error(defaultErrorMessage);
      }
      const { quotes } = (await response.json()) as { quotes: QuotesStructure };

      dispatch(loadQuotesActionCreator(quotes));

      uiDispatch(unsetIsLoadingActionCreator());
    } catch (error) {
      uiDispatch(unsetIsLoadingActionCreator());

      uiDispatch(setIsErrorModalActionCreator((error as Error).message));
    }
  }, [dispatch, uiDispatch]);

  const deleteQuoteById = useCallback(
    async (id: string) => {
      try {
        uiDispatch(setIsLoadingActionCreator());
        const response = await fetch(
          `${process.env.REACT_APP_URL_API_USERS}${quotesRelativePath}/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token} `,
            },
          }
        );

        if (!response.ok) {
          throw new Error(defaultErrorMessage);
        }

        dispatch(deleteQuoteByIdActionCreator(id));

        uiDispatch(unsetIsLoadingActionCreator());

        uiDispatch(setIsSuccessModalActionCreator(successDeleting));
      } catch (error) {
        dispatch(unsetIsLoadingActionCreator());

        dispatch(setIsErrorModalActionCreator((error as Error).message));
      }
    },
    [dispatch, uiDispatch, token]
  );

  const createQuote = useCallback(
    async (newQuote: CreateQuoteStructure) => {
      try {
        uiDispatch(setIsLoadingActionCreator());
        const response = await fetch(
          `${process.env.REACT_APP_URL_API_USERS}${quotesRelativePath}${createRealtivePath}`,
          {
            method: "POST",
            body: JSON.stringify(newQuote),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token} `,
            },
          }
        );

        if (!response.ok) {
          throw new Error(defaultErrorMessage);
        }
        uiDispatch(unsetIsLoadingActionCreator());
        navigateTo(home);
        uiDispatch(setIsSuccessModalActionCreator(successCreating));
      } catch (error) {
        uiDispatch(unsetIsLoadingActionCreator());

        uiDispatch(setIsErrorModalActionCreator((error as Error).message));
      }
    },
    [uiDispatch, navigateTo, token]
  );

  return { loadQuotes, deleteQuoteById, createQuote };
};

export default useQuotesApi;
