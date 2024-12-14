import "../Styles/CommonStyle.css"
import "../Styles/ToggleHeaderStyle.css"
function ToggleHeader() {


    return (
        <div className="container-fluid vh-7-5 primary-bg-color p-0 text-center mt-1 mydict">

                <div>
                    <label>
                        <input type="radio" name="radio"/>
                        <span>CGPA</span>
                    </label>
                    <label>
                        <input type="radio" name="radio"/>
                        <span>GPA</span>
                    </label>

                </div>

        </div>
    );
}

export default ToggleHeader;