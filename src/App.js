import MainFrame from "./Components/MainFrame";
import ToggleHeader from "./Components/ToggleHeader";
import "./Styles/CommonStyle.css"
import CustomCursor from "./Components/CustomCursor";

function App() {
  return (
          <MainFrame>
              <CustomCursor />
              <ToggleHeader />
          </MainFrame>
  );
}

export default App;
