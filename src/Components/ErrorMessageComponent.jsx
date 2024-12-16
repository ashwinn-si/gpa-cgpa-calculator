import "../Styles/CommonStyle.css"
function ErrorMessageComponent(props) {
    return (
        <div className="w-100  d-flex justify-content-center align-items-center popup-message">
            <div
                className="min-w max-w my-1 primary-bg-color border-primary border rounded d-flex justify-content-center align-items-center z-3">
                <p className="fw-bold primary-text-color fs-s p-3 m-0 text-wrap">{props.error}</p>
            </div>
        </div>

    )
}

export default ErrorMessageComponent;