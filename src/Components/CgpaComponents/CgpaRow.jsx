import InputBox from "../InputBox";
import DropDownBox from "../DropDownBox";
import "../../Styles/CommonStyle.css"

function CgpaRow(props) {
    function  tester(){
        console.log("tester from cgpa");
    }
    return (
        <div className="row d-flex  justify-content-around align-items-center my-2">
            <div className="col-4 fs-m primary-text-color fw-medium text-center">
                <InputBox/>
            </div>
            <div className="col-1 fs-m primary-text-color fw-medium text-center delete-container">
                    <span className="material-symbols-outlined" onClick={tester}>
                        delete
                    </span>
            </div>
            <div className="col-2 fs-m primary-text-color fw-medium text-center">
                <DropDownBox/>
            </div>
            <div className="col-2 fs-m primary-text-color fw-medium text-center">
                <DropDownBox/>
            </div>
        </div>
    )
}

export default CgpaRow;