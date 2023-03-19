import { useCallback } from "react";
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
import { useAppDispatch } from "../../store/hooks";
import { QuotesStructure } from "../../types";
import { errorTypes, succesTypes } from "../types";

const { defaultErrorMessage, cuotesNotFoundErrorMessage } = errorTypes;
const { successDeleting } = succesTypes;

const quotesRelativePath = "/quotes";
const deleteRelativePath = "/delete";

const useQuotesApi = () => {
  const dispatch = useAppDispatch();
  const uiDispatch = useAppDispatch();

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
          `${process.env.REACT_APP_URL_API_USERS}${quotesRelativePath}${deleteRelativePath}/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
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
    [dispatch, uiDispatch]
  );

  return { loadQuotes, deleteQuoteById };
};

export default useQuotesApi;
