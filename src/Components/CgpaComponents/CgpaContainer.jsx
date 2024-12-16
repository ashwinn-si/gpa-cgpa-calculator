import "../../Styles/CommonStyle.css"
import CgpaHeader from "./CgpaHeader";
import CgpaRow from "./CgpaRow";
import Button from "../Button";
import {useRef} from "react";

function CgpaContainer() {

    return (
        <>
            <div className="container-md vh-70 primary-bg-color p-2 text-center mt-1">
                <CgpaHeader/>
                <CgpaRow />

            </div>
            <div
                className="container-fluid  vh-7-5 primary-bg-color p-2 text-center mt-1 d-flex justify-content-around align-items-center align-items-center my-2">
                <Button buttonTitle="Add Subject" />
                <Button buttonTitle="Calculate" />
            </div>
        </>

    )
}

export default CgpaContainer;