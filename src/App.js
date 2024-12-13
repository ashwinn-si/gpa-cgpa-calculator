import MainFrame from "./Components/MainFrame";
import Header from "./Components/Header";
import ToggleHeader from "./Components/ToggleHeader";
import GpaContainer from "./Components/GpaContainer";
import AddButtonContainer from "./Components/AddButtonContainer";
import ResultButtonContainer from "./Components/ResultButtonContainer";

function App() {
  return (
      <>
          <MainFrame>
              <Header />
              <ToggleHeader />
              <GpaContainer />
              <AddButtonContainer />
              <ResultButtonContainer />
          </MainFrame>
      </>
  );
}

export default App;
