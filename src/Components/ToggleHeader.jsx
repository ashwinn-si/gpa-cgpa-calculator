import "../Styles/CommonStyle.css"
import "../Styles/ToggleHeaderStyle.css"
import {useEffect, useState} from "react";
import CgpaContainer from "./CgpaComponents/CgpaContainer";
import GpaContainer from "./GpaComponents/GpaContainer";
import UserGuideContainer from "./UserGuideContainer";



function ToggleHeader() {

    const [ToggleHeaderFlag, setToggleHeaderFlag] = useState("UserGuide");

    function handleToggleHeader(event) {
        setToggleHeaderFlag(event.target.value);
    }

    return (
        <>
            <div className="container-md vh-7-5 primary-bg-color p-0 text-center mt-1 mydict">
                <div className="row">
                    <label className="col-5 p-0">
                        <input type="radio" name="radio" value="GPA" onChange={handleToggleHeader}/>
                        <span className="w-100 fw-light"> GPA CAL</span>
                    </label>
                    <label className="col-5 p-0">
                        <input type="radio" name="radio" value="CGPA" onChange={handleToggleHeader}/>
                        <span className="w-100 fw-light">CGPA CAL</span>
                    </label>
                </div>
            </div>
            {ToggleHeaderFlag === "UserGuide" ? <UserGuideContainer message="Select From the Above Header"/> : null}
            {ToggleHeaderFlag === "GPA"? <GpaContainer /> : null}
            {ToggleHeaderFlag === "CGPA"? <CgpaContainer /> : null}
        </>
    );
}
export default ToggleHeader;