import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainFont: string;
    secondaryFont: string;
    colors: {
      mainColor: string;
      secondaryColor: string;
      terciaryColor: string;
      backgroundLightColor: string;
      mainTextColor: string;
      seconadryTextColor: string;
    };
    fontSize: {
      bigSize: string;
      mediumSize: string;
      smallSize: string;
    };
    borderRadius: string;
    padding: string;
  }
}
