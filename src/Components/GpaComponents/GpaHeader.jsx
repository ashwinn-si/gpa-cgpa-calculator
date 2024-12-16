import "../../Styles/CommonStyle.css"
function GpaHeader() {
    return (
        <div className="row d-flex  justify-content-around align-items-center">
            <div className="col-4 fs-m primary-text-color fw-medium text-center">SUBJECT</div>
            <div className="col-1 fs-m primary-text-color fw-medium text-center"></div>
            <div className="col-2 fs-m primary-text-color fw-medium text-center">CREDIT</div>
            <div className="col-2 fs-m primary-text-color fw-medium text-center">GRADE</div>
        </div>

    )
}

export default GpaHeader;