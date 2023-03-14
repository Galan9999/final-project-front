import LoaderStyled from "./LoaderStyles";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled>
      <span aria-label="the app is loading" className="loader"></span>
    </LoaderStyled>
  );
};

export default Loader;
