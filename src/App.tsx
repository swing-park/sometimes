import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "styles/theme";
import store from "redux/config";
import Main from "routes/Main";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <QueryClientProvider client={new QueryClient()}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />} />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
