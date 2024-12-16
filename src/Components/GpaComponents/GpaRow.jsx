import InputBox from "../InputBox";
import "../../Styles/CommonStyle.css"
import {forwardRef} from "react";

const GpaRow = forwardRef( function GpaRow( props, ref ) {
    ref = {
        a:'aswin',
        b:'pradeep'
    }
    return (
        <div className="row d-flex  justify-content-around align-items-center my-2">
            <div className="col-4  fs-m primary-text-color fw-medium text-center">
                <InputBox content={{
                    placeHolder : null,
                    type:"text"
                }}/>
            </div>
            <div className="col-1   fs-m  primary-text-color fw-medium text-center">
                <span className="material-symbols-outlined" >
                        delete
                </span>
            </div>
            <div className="col-4   fs-m  primary-text-color fw-medium text-center">
                <InputBox content={{
                    placeHolder : "Enter GPA",
                    defaultValue : null,
                    type:"number",
                }}/>
            </div>
        </div>
    )
});

export default GpaRow;