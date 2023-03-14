import LoaderStyled from "./LoaderStyles";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled>
      <span
        aria-label="the app is loading"
        role="dialog"
        className="loader"
      ></span>
    </LoaderStyled>
  );
};

export default Loader;
