import "../Styles/DropDownStyle.css";
import {forwardRef, useImperativeHandle, useState} from "react";

const DropDownBox = forwardRef((props , ref) => {
    const [value, setValue] = useState(props.content.defaultValue);

    function handleChange(item) {
        setValue(item);
    }

    //sending data to the parent
    useImperativeHandle(ref, () => ({
        getData(){
            return value
        }
    }))

    return (
        <>
            <div className="dropdown">
                <button
                    className="btn dropdown-toggle custom-button"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {value}
                </button>
                <ul className="dropdown-menu custom-dropdown">
                    {props.content.values.map((item, index) => (
                        <li
                            className="dropdown-item text-center"
                            onClick={() => handleChange(item)}
                            key={index}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
});

export default DropDownBox;
