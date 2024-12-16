function ResultDisplay(props) {
    return (
        <div className="row">
            <p className="primary-text-color fw-medium fs-m">{props.resultMessage} : <span className="fw-bold fs-m hilight-text-color">{props.resultScore}</span></p>
        </div>
    )
}

export default ResultDisplay;