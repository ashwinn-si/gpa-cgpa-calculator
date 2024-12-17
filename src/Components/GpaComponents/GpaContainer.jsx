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
    const [resultFlag , setResultFlag] = useState(false);
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
                }
                setResultFlag(false);
                return;
            }

            setResultGpa( await GpaCalFunction(values))
            setResultFlag(true)

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
            <div className="container-md vh-70 primary-bg-color p-2 text-center mt-1  ">
                {resultFlag ?
                    <ResultDisplay resultMessage="GPA Score" resultScore={resultGpa}/> : null}
                <GpaHeader/>
                {ErrorFlag ? <ErrorMessageComponent error="Subject Name missing"/> : null}
                <div className=" h-91 overflow-y-auto overflow-x-hidden custom-scrollbar">
                    {UserInfoFlag ? (
                        <UserGuideContainer/>
                    ) : (
                        AllRefs.slice().reverse().map((ref, index) => (
                            <GpaRow key={index} ref={ref}/>
                        ))
                    )}
                </div>

            </div>


            <div
                className="container-fluid  vh-7-5 primary-bg-color p-2 text-center mt-1 d-flex justify-content-around align-items-center align-items-center my-2">
                <button name="AddSubject" onClick={ButtonClickHandler}>
                    <a>
                        <span className="fs-s primary-text-color fw-semibold">Add Subject</span>
                    </a>
                </button>
                {AllRefs.length === 0 ?
                    null :
                    (<button name="GpaCalFunction" onClick={ButtonClickHandler}>
                        <a>
                            <span className="fs-s primary-text-color fw-semibold">Calculate</span>
                        </a>
                    </button>)
                }
            </div>

        </>
    );
}

export default GpaContainer;
