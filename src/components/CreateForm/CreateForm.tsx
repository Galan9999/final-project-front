import { useState } from "react";
import useQuotesApi from "../../hooks/useQuotesApi/useQuotesApi";
import { QuoteFormStructure } from "../../types";
import Button from "../Button/Button";
import CreateFormStyled from "./CreateFormStyled";

const CreateForm = (): JSX.Element => {
  const { createQuote } = useQuotesApi();

  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [country, setCountry] = useState("");
  const [quote, setQuote] = useState("");
  const [tags, setTags] = useState("");
  const [lived, setLived] = useState("");
  const [backgroundInfo, setBackgroundInfo] = useState("");

  const handleChangeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  const handleChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const handleChangeQuote = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuote(event.target.value);
  };

  const handleChangeTags = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTags(event.target.value);
  };

  const handleChangeLived = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLived(event.target.value);
  };

  const handleChangeBackgroundInfo = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBackgroundInfo(event.target.value);
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: QuoteFormStructure = {
      author,
      image,
      country,
      quote,
      tags,
      lived,
      backgroundInfo,
    };

    createQuote(formData);
  };

  return (
    <CreateFormStyled className="form" onSubmit={handleOnSubmit}>
      <label className="create-form__label" htmlFor="author">
        author
      </label>
      <input
        onChange={handleChangeAuthor}
        value={author}
        className="create-form__input"
        placeholder="introduce author"
        name="author"
        id="author"
        type="text"
        autoComplete="off"
        required
      ></input>

      <label className="create-form__label" htmlFor="image">
        image
      </label>
      <input
        onChange={handleChangeImage}
        value={image}
        className="create-form__input"
        placeholder="introduce image"
        name="image"
        id="image"
        type="text"
        autoComplete="off"
        required
      ></input>

      <label className="create-form__label" htmlFor="country">
        country
      </label>
      <input
        onChange={handleChangeCountry}
        value={country}
        className="create-form__input"
        placeholder="introduce country"
        name="country"
        id="country"
        type="text"
        autoComplete="off"
        required
      ></input>

      <label className="create-form__label" htmlFor="quote">
        quote
      </label>
      <input
        onChange={handleChangeQuote}
        value={quote}
        className="create-form__input"
        placeholder="introduce quote"
        name="quote"
        id="quote"
        type="text"
        autoComplete="off"
        required
      ></input>

      <label className="create-form__label" htmlFor="tags">
        tags
      </label>
      <input
        onChange={handleChangeTags}
        value={tags}
        className="create-form__input"
        placeholder="introduce tags"
        name="tags"
        id="tags"
        type="text"
        autoComplete="off"
        required
      ></input>

      <label className="create-form__label" htmlFor="lived">
        lived
      </label>
      <input
        onChange={handleChangeLived}
        value={lived}
        className="create-form__input"
        placeholder="introduce lived"
        name="lived"
        id="lived"
        type="text"
        autoComplete="off"
        required
      ></input>

      <label className="create-form__label" htmlFor="backgroundInfo">
        backgroundInfo
      </label>
      <input
        onChange={handleChangeBackgroundInfo}
        value={backgroundInfo}
        className="create-form__input"
        placeholder="introduce backgroundInfo"
        name="backgroundInfo"
        id="backgroundInfo"
        type="text"
        autoComplete="off"
        required
      ></input>

      <Button text="create" className="button" />
    </CreateFormStyled>
  );
};

export default CreateForm;
