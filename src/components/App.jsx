import React, { useState } from "react";
import GlobalTheme from "../styles/GlobalTheme";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "./Header";
import MobileNavMenu from "./MobileNavMenu";
import Body from "./Body";

export const App = () => {
  const [mobileNavOpen, toggleMobileNav] = useState(true);

  return (
    <GlobalTheme>
      <GlobalStyle />
      <Header mobileNavOpen={mobileNavOpen} toggleMobileNav={() => toggleMobileNav(!mobileNavOpen)} />
      <MobileNavMenu mobileNavOpen={mobileNavOpen} />
      <Body mobileNavOpen={mobileNavOpen} />
    </GlobalTheme>
  );
};

export default App;
