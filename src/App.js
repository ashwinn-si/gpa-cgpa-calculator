import MainFrame from "./Components/MainFrame";
import ToggleHeader from "./Components/ToggleHeader";
import GpaContainer from "./Components/GpaContainer";
import AddButtonContainer from "./Components/AddButtonContainer";
import ResultButtonContainer from "./Components/ResultButtonContainer";
import DropDownBox from "./Components/DropDownBox";
import InputBox from "./Components/InputBox";
import Button from "./Components/Button";
import "./Styles/CommonStyle.css"
import {useState} from "react";

function App() {
  return (
          <MainFrame>
              <ToggleHeader />
              <AddButtonContainer />
              <ResultButtonContainer />
          </MainFrame>
  );
}

export default App;
