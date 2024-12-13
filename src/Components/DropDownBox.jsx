import "../Styles/DropDownStyle.css"
import {useEffect, useState} from "react";

function DropDownBox(props) {
    const [value,setValue] = useState("O");
    function handleChange(event) {
        setValue(event.target.value);
    }

    useEffect(() => {
        console.log("new value " + value);
    },[value])

    return (
        <>
            <div className="dropdown">
                <button className="btn  dropdown-toggle custom-button" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                    {value}
                </button>
                <ul className="dropdown-menu custom-dropdown">
                    <li className="dropdown-item" value="0" onClick={handleChange}> Action</li>
                    <li className="dropdown-item" value="1" onClick={handleChange}>Another action</li>
                    <li className="dropdown-item" value="2" onClick={handleChange}>Something else here</li>
                </ul>
            </div>

        </>
    )
}

export default DropDownBox;