import "../Styles/InputBoxStyle.css"
function InputBox(props) {
    //using props:
    //1. add placeholders
    //2. default values
    //3. usestate and useeffect
    return (
        <div className="form-control">
            <input className="input input-alt text-center" placeholder="Type something intelligent" required="" type="text"/>
            <span className="input-border input-border-alt text-center"></span>
        </div >
    )
}

export default InputBox;