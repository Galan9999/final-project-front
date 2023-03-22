import { PreloadedState } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RootState, setupStore, store } from "../../store/store";
import GlobalStyles from "../../styles/GlobalStyles";
import theme from "../../styles/theme";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <Provider store={testStore}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
