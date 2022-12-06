import cn from "classnames";
import React from "react";

import "./App.css";
import { Header } from "./components/header";
import { UseGeneral } from "./contexts/general/GeneralContext";
import { Root } from "./root";

function App() {
  const { isLightTheme } = UseGeneral();
  return (
    <div
      className={cn("container", {
        containerDark: !isLightTheme,
      })}
    >
      <Header />
      <div className="columns">
        <Root />
      </div>
    </div>
  );
}

export default App;
