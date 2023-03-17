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

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(errorTypes.cuotesNotFoundErrorMessage);
        }
        throw new Error(errorTypes.defaultErrorMessage);
      }
      const { quotes } = (await response.json()) as { quotes: QuotesStructure };

      dispatch(loadQuotesActionCreator(quotes));

      uiDispatch(unsetIsLoadingActionCreator());
    } catch (error) {
      uiDispatch(unsetIsLoadingActionCreator());

      uiDispatch(setIsErrorModalActionCreator((error as Error).message));
    }
  }, [dispatch, uiDispatch]);

  return { loadQuotes };
};

export default useQuotesApi;
