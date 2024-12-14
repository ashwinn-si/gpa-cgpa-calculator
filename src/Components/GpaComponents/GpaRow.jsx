import InputBox from "../InputBox";
import "../../Styles/CommonStyle.css"

function GpaRow(props) {
    function  tester(){
        console.log("tester from gpa");
    }
    return (
        <div className="row d-flex  justify-content-around align-items-center my-2">
            <div className="col-4  fs-m primary-text-color fw-medium text-center">
                <InputBox/>
            </div>
            <div className="col-1   fs-m  primary-text-color fw-medium text-center">
                <span className="material-symbols-outlined" onClick={tester}>
                        delete
                </span>
            </div>
            <div className="col-4   fs-m  primary-text-color fw-medium text-center">
                <InputBox />
            </div>
        </div>
    )
}

export default GpaRow;