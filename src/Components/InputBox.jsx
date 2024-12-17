import "../Styles/InputBoxStyle.css"
import {useState, useEffect, forwardRef, useImperativeHandle} from "react";

const InputBox = forwardRef((props, ref) => {

    //values from props
    const placeHolder = props.content.placeHolder;
    const defaultValue = props.content.defaultValue;
    const type = props.content.type;

    //values for use state and useeffect
    const [value, setValue] = useState(defaultValue);

    function handleChange(event) {

        setValue(event.target.value);

    }

    //child to parent data transfer
    useImperativeHandle(ref, () => ({
        getData(){
            return value
        }
    }))

    return (
        <div className="form-control">
            <input className="input input-alt text-center fw-light" placeholder={placeHolder != null ? placeHolder : null} required="" type={type} defaultValue={defaultValue != null ? defaultValue : null} onChange={handleChange} />
            <span className="input-border input-border-alt text-center fw-light"></span>
        </div>
    )
})

export default InputBox;