import { QuoteStructure } from "../../types";
import DetailStyled from "./DetailStyled";

interface DetailProps {
  quote: QuoteStructure;
}

const Detail = ({
  quote: { author, backgroundInfo, country, image, lived, quote, tags },
}: DetailProps) => {
  return (
    <DetailStyled className="detail">
      <img className="detail__image" src={image} alt={`${author} author`}></img>
      <div className="detail__body">
        <h1>{author}</h1>
        <span className="detail__author-info">
          {country}, {lived}
        </span>
        <p className="detail__quote">"{quote}"</p>
        <p className="detail__backgroundInfo">{backgroundInfo}</p>
        <span className="detail__tags">#{tags}</span>
      </div>
    </DetailStyled>
  );
};

export default Detail;
