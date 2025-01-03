import InputBox from "../InputBox";
import DropDownBox from "../DropDownBox";
import "../../Styles/CommonStyle.css"
import {forwardRef, useImperativeHandle, useRef, useState} from "react";

const GpaRow = forwardRef((props, ref) => {
    const  Refs = {
        subjectName : useRef(null),
        credit : useRef(null),
        grade : useRef(null)
    }

    const [VisiblityFlag, setVisiblity] = useState(true);

    //sending data to parent
    useImperativeHandle(ref, () => ({
        getData(){
            return {
                subjectName : Refs.subjectName.current.getData(),
                credit : Refs.credit.current.getData(),
                grade : Refs.grade.current.getData(),
                visible : VisiblityFlag // if true take the value else not
            };
        }
    }))

    function tester(){
        setVisiblity(false);
    }

    return (
        <>
            {VisiblityFlag ? (
                <div className="row d-flex  justify-content-around align-items-center my-3">
                    <div className="col-4 fs-m primary-text-color fw-light text-center">
                        <InputBox content={{
                            placeHolder : "Subject Name",
                            defaultValue : null,
                            type:"text"
                        }} ref={Refs.subjectName}/>
                    </div>
                    <div className="col-1 fs-m primary-text-color fw-light text-center delete-container" onClick={tester} >
                    <span className="material-symbols-outlined " >
                        delete
                    </span>
                    </div>
                    <div className="col-2 fs-m primary-text-color fw-light text-center">
                        <DropDownBox content={{
                            defaultValue : 1,
                            values : [1,1.5,2,3,4,5]
                        }} ref={Refs.credit}/>
                    </div>
                    <div className="col-2 fs-m primary-text-color fw-light text-center">
                        <DropDownBox content={{
                            defaultValue : "O",
                            values : ["O","A +","A","B +","B","C","U"]
                        }} ref={Refs.grade}/>
                    </div>
                </div>
            ) : null}
        </>

    )
})

export default GpaRow;