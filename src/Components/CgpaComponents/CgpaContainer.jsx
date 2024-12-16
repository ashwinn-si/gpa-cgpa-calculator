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
                <CgpaRow/>

            </div>
            <div className="container-fluid vh-7-5 primary-bg-color text-center my-2">
                <button name="AddSEM" >
                    <a>
                        <span className="fs-s primary-text-color fw-semibold">Add SEM</span>
                    </a>
                </button>
            </div>
            <div
                className="container-fluid vh-7-5 primary-bg-color p-2 text-center mt-1 d-flex justify-content-around align-items-center align-items-center my-2">
                <button name="Analyse" >
                    <a>
                        <span className="fs-s primary-text-color fw-semibold">Analyse</span>
                    </a>
                </button>
                <button name="CgpaCalFunction">
                    <a>
                        <span className="fs-s primary-text-color fw-semibold">Calculate</span>
                    </a>
                </button>
                <button name="Predict" >
                    <a>
                        <span className="fs-s primary-text-color fw-semibold">Predict</span>
                    </a>
                </button>
            </div>
        </>

    )
}

export default CgpaContainer;