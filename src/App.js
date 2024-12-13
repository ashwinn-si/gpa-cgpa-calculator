import MainFrame from "./Components/MainFrame";
import Header from "./Components/Header";
import ToggleHeader from "./Components/ToggleHeader";
import GpaContainer from "./Components/GpaContainer";
import AddButtonContainer from "./Components/AddButtonContainer";
import ResultButtonContainer from "./Components/ResultButtonContainer";
import DropDownBox from "./Components/DropDownBox";
import InputBox from "./Components/InputBox";
import Button from "./Components/Button";
import "./Styles/CommonStyle.css"
function App() {
  return (
      <>
          <MainFrame>
              <Header />
              <ToggleHeader />
              <GpaContainer>
                  <DropDownBox></DropDownBox>
                  <InputBox></InputBox>
                  <Button></Button>
              </GpaContainer>
              <AddButtonContainer />
              <ResultButtonContainer />
          </MainFrame>
      </>
  );
}

export default App;
