import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "styles/theme";
import store from "redux/config";
import Main from "routes/Main";
import NewCard from "routes/NewCard";
import SignIn from "routes/SignIn";
import SignUp from "routes/SignUp";
import { Layout } from "components";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <GlobalStyle />
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <QueryClientProvider client={new QueryClient()}>
              <Layout>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path={"/cards/:mode"} element={<NewCard />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                  </Routes>
                </BrowserRouter>
              </Layout>
            </QueryClientProvider>
          </Provider>
        </ThemeProvider>
      </CookiesProvider>
    </StyledEngineProvider>
  );
};

export default App;
