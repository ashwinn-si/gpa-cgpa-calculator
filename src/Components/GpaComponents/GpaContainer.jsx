import "../../Styles/CommonStyle.css";
import "../../Styles/ButtonStyle.css";
import GpaHeader from "./GpaHeader";
import GpaRow from "./GpaRow";
import {useEffect, useRef, useState} from "react";
import UserGuideContainer from "../UserGuideContainer";
import ErrorMessageComponent from "../ErrorMessageComponent";
import CgpaCalFunction from "../../JavaScriptFiles/CgpaCalFunction";
import ResultDisplay from "../ResultDisplay";

function GpaContainer(props) {

    const [AllRefs, setAllRefs] = useState([]);

    const [values, setValues] = useState([]);

    const refs = useRef([]);
    const [ErrorFlag , setErrorFlag] = useState(false);
    const [resultFlag , setResultFlag] = useState(false);
    const [resultGpa, setResultGpa] = useState(null);

    async function ButtonClickHandler(e) {
        if (e.currentTarget.name === "CgpaCalFunction") {
            setValues([]);
            let errorFlag = false;
            AllRefs.map(item => {
                try {
                    const currData = item.current.getData();
                    if (currData) {
                        if (currData.subjectName == null || currData.subjectName === "") {
                            setErrorFlag(true);
                            setTimeout(() => {
                                setErrorFlag(false);
                            }, 3000);
                            errorFlag = true;
                        }
                        values.push(item.current.getData());
                    }
                } catch (e) {
                    //the value is deleted
                }
            });
            if (errorFlag) {
                setResultFlag(false);
                return;
            }
            setResultGpa( await CgpaCalFunction(values))
            setResultFlag(true)
        } else if (e.currentTarget.name === "AddSEM") {
            console.log("addsem clickec")
            setAllRefs((prevValues) => {
                const newRowRef = {current: null}
                refs.current.push(newRowRef);
                return [...prevValues, newRowRef];
            });
        } else if (e.currentTarget.name === "Predict") {
            console.log("predict clickec")
        } else {
            console.log("analyse clicked")
        }
    }

    return (
        <>
            <div className="container-md vh-70 primary-bg-color p-2 text-center mt-1  ">
                { resultFlag && values.length != 0 ? <ResultDisplay resultMessage="GPA Score" resultScore={resultGpa}  /> : null}
                <GpaHeader />
                { ErrorFlag ? <ErrorMessageComponent error="Subject Name missing" /> : null }
                <div className=" h-91 overflow-y-auto overflow-x-hidden custom-scrollbar">
                    {AllRefs.length === 0 ? (
                        <UserGuideContainer />
                    ) : (
                        AllRefs.slice().reverse().map((ref, index) => (
                        <GpaRow key={index} ref={ref} />
                        ))
                    )}
                </div>

            </div>

            <div className="container-fluid vh-7-5 primary-bg-color text-center my-2">
                <button name="AddSEM" onClick={ButtonClickHandler}>
                    <a>
                        <span className="fs-s primary-text-color fw-semibold">Add SEM</span>
                    </a>
                </button>

            </div>

            {AllRefs.length === 0 ? null : (
                <div className="container-fluid vh-7-5 primary-bg-color p-2 text-center mt-1 d-flex justify-content-around align-items-center align-items-center my-2">
                    <button name="Analyse" onClick={ButtonClickHandler}>
                        <a>
                            <span className="fs-s primary-text-color fw-semibold">Analyse</span>
                        </a>
                    </button>
                    <button name="CgpaCalFunction" onClick={ButtonClickHandler}>
                        <a>
                            <span className="fs-s primary-text-color fw-semibold">Calculate</span>
                        </a>
                    </button>
                    <button name="Predict" onClick={ButtonClickHandler}>
                        <a>
                            <span className="fs-s primary-text-color fw-semibold">Predict</span>
                        </a>
                    </button>
                </div>
            )}
        </>
    );
}

export default GpaContainer;
