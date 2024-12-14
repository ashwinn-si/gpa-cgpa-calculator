import "../Styles/ButtonStyle.css"
import "../Styles/CommonStyle.css"

function Button(props) {
    function handleClick() {
        console.log("clicked");
    }
    return (
        <button onClick={handleClick}>
            <a><span className="fs-s primary-text-color fw-semibold">{props.buttonTitle}</span></a>
        </button>
    )
}

export default Button;