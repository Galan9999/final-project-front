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
        height={130}
        width={130}
      />
      <p className="card__quote" aria-label="a quote from an author">
        {quote.quote}
      </p>

      <h2 className="card__author"> {quote.author}</h2>
      <span className="card__tags" aria-label="tags">
        #{quote.tags}
      </span>
    </QuoteCardStyled>
  );
};

export default QuoteCard;
