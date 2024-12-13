import "../Styles/CommonStyle.css"
import {useState} from "react";

function ToggleHeader() {


    return (
        <div className="container-fluid vh-7-5 primary-bg-color p-0 text-center mt-1">
            <div
                className="row h-100 w-100 d-flex justify-content-center align-items-center p-0 m-0 primary-text-color">
                <div className="col-6 primary-text-color">
                    CPGA
                </div>
                <div className="col-6 primary-text-color">
                    GPA
                </div>
            </div>
        </div>
    );
}

export default ToggleHeader;