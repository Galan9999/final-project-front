import { useCallback } from "react";
import { loadQuotesActionCreator } from "../../store/features/quotes/quotesSlice";
import {
  setIsErrorModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import { QuotesStructure } from "../../types";
import { errorTypes } from "../types";

const { defaultErrorMessage } = errorTypes;

const quotesRelativePatch = "/quotes";

const useQuotesApi = () => {
  const dispatch = useAppDispatch();
  const uiDispatch = useAppDispatch();
  const loadQuotes = useCallback(async () => {
    try {
      uiDispatch(setIsLoadingActionCreator());
      const response = await fetch(
        `${process.env.REACT_APP_URL_API_USERS}${quotesRelativePatch}`
      );
      const { quotes } = (await response.json()) as { quotes: QuotesStructure };

      if (!response.ok) {
        throw new Error();
      }

      dispatch(loadQuotesActionCreator(quotes));

      uiDispatch(unsetIsLoadingActionCreator());
    } catch (error) {
      uiDispatch(unsetIsLoadingActionCreator());

      uiDispatch(setIsErrorModalActionCreator(defaultErrorMessage));
    }
  }, [dispatch, uiDispatch]);

  return { loadQuotes };
};

export default useQuotesApi;
