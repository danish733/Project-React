
import React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Topheader from "./components/header/Topheader";
import NavBarHeader from "./components/header/NavBarHeader";
import { DarkModeProvider } from "./components/authcontext/DarkModeContext";
import MainDiv from "./components/main/MainDiv";
import FootetDiv from "./components/footer/FootetDiv";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <DarkModeProvider>
        <Topheader />
        <NavBarHeader />
        <MainDiv />
        <FootetDiv />
      </DarkModeProvider>
    </ChakraProvider>
  );
}

export default App;
