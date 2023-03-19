import Quotes from "../../components/Quotes/Quotes";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled className="home">
      <Quotes />
    </HomePageStyled>
  );
};

export default HomePage;
