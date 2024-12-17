import Loader from "./Loader";
import { useEffect, useState } from "react";
import AnalyseChart from "../JavaScriptFiles/AnalyseChart";
import AnalyseGraph from "./Chart";
import predictScript from "../JavaScriptFiles/PredictScript";

function ExtraFeaturesContainer(props) {
    const {content , modifyData} = props;
    const [loaderFlag, setLoaderFlag] = useState(true);
    const [chartData, setChartData] = useState({});
    const[desc,setDesc] = useState(null);
    const[title, setTitle] = useState(null);
    const userGpa = content;

    useEffect(() => {
        // Call AnalyseChart synchronously
        if(props.function === "Analyse"){
            const result = AnalyseChart(userGpa);
            setChartData(result);
            setLoaderFlag(false);
            setTitle("Analyse Graph");
        }else{
            let result;
            predictScript(userGpa).then((output)=>{
                result = output;
                setChartData(result);
                setLoaderFlag(false);
                setDesc("Note: The model is trained on approximate data, so results may not be fully accurate.")
                setTitle("Predict Graph");
            });
        }

    }, [userGpa]); // Dependency array ensures it runs when `userGpa` changes.
    function handleClose(){
        modifyData(false);
    }
    return (
        <div className="container-md vh-100 position-absolute z-1 bg-danger opacity-1 d-flex flex-column justify-content-center align-items-center">
            <div className="p-5 bg-black d-flex flex-column justify-content-center align-items-center ">
                {loaderFlag ? (
                    <>
                        <p className="fs-l my-3 fw-bold">Calculating...</p>
                        <Loader/>
                    </>
                ) : (
                    <>
                        <AnalyseGraph content={chartData} title={title} description={desc}/>
                        <button onClick={handleClose}>ashwin si</button>
                    </>
                )}
            </div>

        </div>
    );
}

export default ExtraFeaturesContainer;
