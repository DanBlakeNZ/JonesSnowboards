import React from "react";
import GlobalTheme from "../styles/GlobalTheme";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "./Header";

export const App = () => {
  return (
    <GlobalTheme>
      <GlobalStyle />
      <Header />
    </GlobalTheme>
  );
};

export default App;
