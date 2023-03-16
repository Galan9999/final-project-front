import { QuoteStructure } from "../../types";
import QuoteCardStyled from "./QuoteCardStyled";

interface QuoteCardProps {
  quote: QuoteStructure;
}

const QuoteCard = ({ quote }: QuoteCardProps): JSX.Element => {
  return (
    <QuoteCardStyled className="card">
      <img
        className="card__image"
        src={quote.image}
        alt={`${quote.author} author`}
      />
      <p className="card__quote" aria-label="a quote from an author">
        {quote.quote}
      </p>
      <h1 className="card__author"> {quote.author}</h1>
      <span className="card__tags" aria-label="tags">
        {quote.tags}
      </span>
      <span className="card__lived">{quote.lived}</span>
    </QuoteCardStyled>
  );
};

export default QuoteCard;
