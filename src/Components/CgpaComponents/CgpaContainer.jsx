import "../../Styles/CommonStyle.css"
import CgpaHeader from "./CgpaHeader";
import CgpaRow from "./CgpaRow";
import {useRef, useState} from "react";
import UserGuideContainer from "../UserGuideContainer";
import React from "react";
import ErrorMessageComponent from "../ErrorMessageComponent";
import CgpaCalFunction from "../../JavaScriptFiles/CgpaCalFunction";
import ResultDisplay from "../ResultDisplay";
import ExtraFeaturesContainer from "../ExtraFeaturesContainer";

function CgpaContainer() {

    const[AllRefs,setAllRefs] = useState([]);
    const[ResultGpa, setResultGpa] = useState(null);
    const[UserInfoFlag, setUserInfoFlag] = useState(true);
    const[ExtrasFlag, setExtrasFlag] = useState(false); //flag for the extra buttons
    const addSemButtonRef = useRef(null);
    const[UserGpa, setUserGpa] = useState([]);
    const[UserSemester, setUserSemester] = useState([]);
    const [ErrorFlag, setErrorFlag] = useState(false);
    const [ErrorContent,setErrorContent] = useState(null);
    const [ResultDisplayFlag,setResultDisplay] = useState(false);
    const [ExtraFeaturesFlag,setExtraFeaturesFlag] = useState(false);
    const[ExtraFeatureFunction,setExtraFeatureFunction] = useState(null);

    const ref = useRef([]);
    function handleClose(modifiedData){
        setExtraFeaturesFlag(modifiedData);
        setAllRefs([]);
        setResultGpa(null);
        setUserInfoFlag(true);
    }

    //function that retrives the data from all the child component
    async function DataReterival() {
        const currGpa = []
        const currSem = []
        let ErrorFlag = false;
        AllRefs.forEach(item => {
            try {
                const currData = item.current.getData();
                if (currData.gpa > 10 || currData.gpa < 0 || currData.gpa == undefined) {
                    ErrorFlag = 1;
                    return false;
                }
                if (currData.semester === "Sem - ") {
                    ErrorFlag = 2;
                    return false;
                }
                currGpa.push(currData.gpa);
                currSem.push(currData.semester);
            } catch (e) {
                //value is not available as it is deleted
            }
        });
        if (ErrorFlag == 1) {
            setErrorFlag(1);
            setErrorContent("Invalid GPA");
            setTimeout(() => {
                setErrorFlag(0);
            }, 3000)
            setResultDisplay(false);
            setResultGpa(null);
            return false;
        } else if (ErrorFlag == 2) {
            setErrorFlag(1);
            setErrorContent("Sem Count Missing");
            setTimeout(() => {
                setErrorFlag(0);
            }, 3000)
            setResultDisplay(false);
            setResultGpa(null);
            return false;
        }
        if (currSem.length == 0) {
            setAllRefs([])
            setResultGpa(null);
            setUserInfoFlag(true);
            setExtrasFlag(false);
            setResultDisplay(false);
            return false;
        }
        if(currSem.length > 8){
            setErrorFlag(1);
            setErrorContent("Invalid No of Semester ");
            setTimeout(() => {
                setErrorFlag(0);
            }, 3000)
            setResultDisplay(false);
            return false;
        }
        setUserGpa(currGpa);
        setUserSemester(currSem);
        setResultGpa(await CgpaCalFunction(currGpa));
        setResultDisplay(true);
        return true;
    }

    function handleClick(e) {
        const functionName = e.currentTarget.name;
        if (functionName === "AddSEM") {
            if (functionName === "AddSEM") {
                addSemButtonRef.current.focus();
                setAllRefs((prevState) => {
                    const newRef = React.createRef(); // Use React.createRef()
                    ref.current.push(newRef);
                    return [...prevState, newRef];
                });
                setUserInfoFlag(false);
                setExtrasFlag(true);
            }
        } else if (functionName === "CgpaCalFunction") {
            DataReterival()
        }else if (functionName === "Analyse") {
            DataReterival().then((result)=>{
                if(result){
                    setExtraFeaturesFlag(true);
                    setExtraFeatureFunction("Analyse")
                }
            })
        } else{
            DataReterival().then((result)=>{
                if(result){
                    setExtraFeaturesFlag(true);
                    setExtraFeatureFunction("Predict")
                }
            })
        }
    }

    return (
        <>
            {
                ExtraFeaturesFlag ?
                        <ExtraFeaturesContainer content={UserGpa} modifyData={handleClose} function={ExtraFeatureFunction}/>
                     :
                    <>
                        <div className="container-md vh-70 primary-bg-color p-2 text-center mt-1
                        custom-border-bottom">
                            <ResultDisplay resultMessage="CGPA : " resultScore={ResultGpa}/>
                            <CgpaHeader/>
                            <div className=" h-91 overflow-y-auto overflow-x-hidden custom-scrollbar">
                                {
                                    ErrorFlag != 0 ? (<ErrorMessageComponent error={ErrorContent}/>) : null
                                }
                                {UserInfoFlag ? (<UserGuideContainer message="Add Semester Below !!"/>) : (
                                    AllRefs.map((ref, index) => (
                                        <CgpaRow key={index} ref={ref}/>
                                    ))
                                )}
                                <button name="AddSEM" onClick={handleClick} className="m-3"  ref={addSemButtonRef}>
                                    <a>
                                        <span className="fs-s primary-text-color fw-light">Add SEM</span>
                                    </a>
                                </button>
                            </div>

                        </div>
                        <div
                            className="container-md vh-7-5 primary-bg-color text-center my-2  py-5 d-flex align-items-center justify-content-around align-items-center flex-wrap">
                            {
                                ExtrasFlag ?
                                    <>
                                        <button name="Predict" onClick={handleClick}>
                                            <a>
                                                <span className="fs-s primary-text-color fw-light">Predict</span>
                                            </a>
                                        </button>
                                        <button name="CgpaCalFunction" onClick={handleClick}>
                                            <a>
                                                <span className="fs-s primary-text-color fw-light">Calculate</span>
                                            </a>
                                        </button>
                                        <button name="Analyse" onClick={handleClick}>
                                            <a>
                                                <span className="fs-s primary-text-color fw-light">Analyse</span>
                                            </a>
                                        </button>
                                    </>
                                    : null

                            }

                        </div>

                    </>
            }
        </>
    )
}

export default CgpaContainer;