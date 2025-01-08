import "../../Styles/CommonStyle.css";
import "../../Styles/ButtonStyle.css";
import GpaHeader from "./GpaHeader";
import GpaRow from "./GpaRow";
import {useEffect, useRef, useState} from "react";
import UserGuideContainer from "../UserGuideContainer";
import ErrorMessageComponent from "../ErrorMessageComponent";
import GpaCalFunction from "../../JavaScriptFiles/GpaCalFunction";
import ResultDisplay from "../ResultDisplay";
import ExtraFeaturesContainer from "../ExtraFeaturesContainer";


function GpaContainer(props) {

    const [AllRefs, setAllRefs] = useState([]);

    const [values, setValues] = useState([]);

    const refs = useRef([]);
    const [ErrorFlag , setErrorFlag] = useState(false);
    const [resultFlag , setResultFlag] = useState("GPA : ");
    const [resultGpa, setResultGpa] = useState(null);
    const [UserInfoFlag , setUserInfoFlag] = useState(true);

    async function ButtonClickHandler(e) {
        if (e.currentTarget.name === "GpaCalFunction") {
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
                            setResultGpa(null)
                        }
                        values.push(item.current.getData());
                    }
                } catch (e) {
                    //the value is deleted
                }
            });
            if (errorFlag || values.length === 0) {
                if(values.length === 0){
                    setUserInfoFlag(true);
                    setAllRefs([]);
                    setResultGpa(null)
                }
                setResultFlag("GPA : ");
                return;
            }

            setResultGpa( await GpaCalFunction(values))
            setResultFlag("GPA : ")

        } else  {
            setAllRefs((prevValues) => {
                const newRowRef = {current: null}
                refs.current.push(newRowRef);
                return [...prevValues, newRowRef];
            });
            setUserInfoFlag(false);
        }
    }

    return (
        <>
            <div className="container-md vh-70 primary-bg-color p-2 text-center mt-1   custom-border-bottom">

                    <ResultDisplay resultMessage={resultFlag} resultScore={resultGpa}/>
                <GpaHeader/>

                <div className=" h-91 overflow-y-auto overflow-x-hidden custom-scrollbar ">
                    {ErrorFlag ? <ErrorMessageComponent error="Subject Name missing"/> : null}
                    {UserInfoFlag ? (
                        <UserGuideContainer message="Add Subject Below !!"/>
                    ) : (
                        AllRefs.slice().reverse().map((ref, index) => (
                            <GpaRow key={index} ref={ref}/>
                        ))
                    )}
                    <button name="AddSubject" onClick={ButtonClickHandler} className="m-2">
                        <a>
                            <span className="fs-s primary-text-color fw-light">Add Subject</span>
                        </a>
                    </button>
                </div>

            </div>


            <div
                className="container-md  vh-7-5 primary-bg-color p-2 text-center mt-1 d-flex justify-content-around align-items-center align-items-center my-2 py-5">
                
                {AllRefs.length === 0 ?
                    null :
                    (<button name="GpaCalFunction" onClick={ButtonClickHandler}>
                        <a>
                            <span className="fs-s primary-text-color fw-light">Calculate</span>
                        </a>
                    </button>)
                }
            </div>

        </>
    );
}

export default GpaContainer;
