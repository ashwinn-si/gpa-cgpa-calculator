import "../../Styles/CommonStyle.css"
import GpaHeader from "./GpaHeader";
import GpaRow from "./GpaRow";
import Button from "../Button";

function GpaContainer() {
    function tester(){
        console.log("clicking");
    }
    return (
        <>
            <div className="container-md vh-70 primary-bg-color p-2 text-center mt-1">
                <GpaHeader/>
                <GpaRow/>

            </div>
            <div
                className="container-fluid  vh-7-5 primary-bg-color p-2 text-center mt-1 d-flex justify-content-around align-items-center align-items-center my-2">
                <Button buttonTitle="Add Subject" onClick={tester}/>
                <Button buttonTitle="Calculate"/>
            </div>
        </>

    )
}

export default GpaContainer;