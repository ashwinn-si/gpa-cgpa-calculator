import "../../Styles/CommonStyle.css"
function GpaHeader() {
    return (
        <div className="row d-flex  justify-content-around align-items-center  py-2 py-1 custom-border-bottom">
            <div className="col-4 fs-m primary-text-color fw-light text-center m-0">SUBJECT</div>
            <div className="col-1 fs-m primary-text-color fw-light text-center m-0"></div>
            <div className="col-2 fs-m primary-text-color fw-light text-center m-0">CREDIT</div>
            <div className="col-2 fs-m primary-text-color fw-light text-center m-0">GRADE</div>
        </div>

    )
}

export default GpaHeader;