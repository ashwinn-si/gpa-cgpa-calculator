import "../../Styles/CommonStyle.css"
import CgpaHeader from "./CgpaHeader";
import CgpaRow from "./CgpaRow";
import Button from "../Button";

function CgpaContainer(props){
    function tester(){
        console.log("tester");
    }
    return (
        <>
            <div className="container-md vh-70 primary-bg-color p-2 text-center mt-1 ">
                <CgpaHeader/>
                <CgpaRow/>

            </div>
            <div className="container-fluid  vh-7-5 primary-bg-color  text-center my-2">
                <Button buttonTitle="Add SEM"/>
            </div>
            <div
                className="container-fluid  vh-7-5 primary-bg-color p-2 text-center mt-1 d-flex justify-content-around align-items-center align-items-center my-2">
                    <Button buttonTitle="Analyse"/>
                    <Button buttonTitle="Calculate"/>
                    <Button buttonTitle="Predict"/>
            </div>
        </>

    )
}

export default CgpaContainer;