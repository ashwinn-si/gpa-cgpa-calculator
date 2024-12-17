import MainFrame from "./Components/MainFrame";
import ToggleHeader from "./Components/ToggleHeader";
import "./Styles/CommonStyle.css"
import CustomCursor from "./Components/CustomCursor";

function App() {
  return (
          <MainFrame>
            {
              window.innerWidth > 768 ? <CustomCursor/> : null
            }
              <ToggleHeader />
          </MainFrame>
  );
}

export default App;
