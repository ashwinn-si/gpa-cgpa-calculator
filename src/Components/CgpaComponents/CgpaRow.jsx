import InputBox from "../InputBox";
import "../../Styles/CommonStyle.css"
import {forwardRef, useImperativeHandle, useRef, useState} from "react";

const CgpaRow = forwardRef((props, ref )  => {
    const Refs = {
        semester : useRef(null),
        gpa : useRef(null),
    }
    const [visiblityFlag , setVisiblity] = useState(true);

    useImperativeHandle(ref, () => ({
        getData() {
            return {
                semester : Refs.semester.current.getData(),
                gpa : Refs.gpa.current.getData(),
            }
        }
    }))

    return (
        <>
            {
                visiblityFlag ? (
                    <div className="row d-flex  justify-content-around align-items-center my-2">
                        <div className="col-4  fs-m primary-text-color fw-medium text-center">
                            <InputBox content={{
                                placeHolder: null,
                                type: "text",
                                defaultValue: "Sem - ",

                            }} ref = {Refs.semester}/>
                        </div>
                        <div className="col-1   fs-m  primary-text-color fw-medium text-center delete-container">
                <span className="material-symbols-outlined " onClick={()=>setVisiblity(false)}>
                        delete
                </span>
                        </div>
                        <div className="col-4   fs-m  primary-text-color fw-medium text-center">
                            <InputBox content={{
                                placeHolder: "Enter GPA",
                                defaultValue: null,
                                type: "number",

                            }} ref = {Refs.gpa}/>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
});

export default CgpaRow;