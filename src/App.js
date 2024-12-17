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
              <p className="primary-text-color fw-light text-center m-3 fs-s">Developed : <span className="hilight-text-color fs-s credit "  onClick={() => window.open("https://www.linkedin.com/in/ashwinsi/", "_blank")}>Ashwin SI </span></p>
          </MainFrame>
  );
}

export default App;
