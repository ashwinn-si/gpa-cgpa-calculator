function ResultDisplay(props) {
    return (
        <div className="row  p-2">
            <p className="primary-text-color fw-light fs-m m-0 ">{props.resultMessage}<span className="fw-normal fs-m hilight-text-color">{props.resultScore}</span></p>
        </div>
    )
}

export default ResultDisplay;