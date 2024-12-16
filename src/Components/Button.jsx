import "../Styles/ButtonStyle.css"
import "../Styles/CommonStyle.css"


function Button(props) {

    return (
        <button >
            <a><span className="fs-s primary-text-color fw-semibold">{props.buttonTitle}</span></a>
        </button>
    )
}

export default Button;