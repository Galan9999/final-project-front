import { useEffect } from "react";
import useQuotesApi from "../../hooks/useQuotesApi/useQuotesApi";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import QuoteCard from "../QuoteCard/QuoteCard";
import QuotesStyled from "./QuotesStyled";

const Quotes = (): JSX.Element => {
  const { loadQuotes } = useQuotesApi();

  const quotes = useAppSelector((state: RootState) => state.quotes);

  useEffect(() => {
    loadQuotes();
  }, [loadQuotes]);

  return (
    <QuotesStyled className="quotes">
      {quotes.map((quote) => (
        <li className="quote" key={quote.id}>
          <QuoteCard quote={quote} />
        </li>
      ))}
    </QuotesStyled>
  );
};

export default Quotes;
