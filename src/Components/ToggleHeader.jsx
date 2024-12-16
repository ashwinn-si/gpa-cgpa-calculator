import "../Styles/CommonStyle.css"
import "../Styles/ToggleHeaderStyle.css"
import {useEffect, useState} from "react";
import CgpaContainer from "./CgpaComponents/CgpaContainer";
import GpaContainer from "./GpaComponents/GpaContainer";
import UserGuideContainer from "./UserGuideContainer";



function ToggleHeader() {

    const [ToggleHeaderFlag, setToggleHeaderFlag] = useState("UserGuide");
    // ToggleHeaderFlag -> True [GPA CAL] | False [CGPA CAL]

    function handleToggleHeader(event) {
        setToggleHeaderFlag(event.target.value);
    }

    return (
        <>
            <div className="container-fluid vh-7-5 primary-bg-color p-0 text-center mt-1 mydict">
                <div className="row">
                    <label className="col-5 p-0">
                        <input type="radio" name="radio" value="GPA" onChange={handleToggleHeader}/>
                        <span className="w-100"> GPA CAL</span>
                    </label>
                    <label className="col-5 p-0">
                        <input type="radio" name="radio" value="CGPA" onChange={handleToggleHeader}/>
                        <span className="w-100">CGPA CAL</span>
                    </label>
                </div>
            </div>
            {ToggleHeaderFlag === "UserGuide" ? <UserGuideContainer /> : null}
            {ToggleHeaderFlag === "GPA"? <GpaContainer /> : null}
            {ToggleHeaderFlag === "CGPA"? <CgpaContainer /> : null}
        </>
    );
}
export default ToggleHeader;