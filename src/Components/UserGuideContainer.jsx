import bijomi from "../Assets/bijomi.png";
import "../Styles/CommonStyle.css"
function UserGuideContainer(props) {
    //use props for selecting the img
    //use props for vh as there will be two two vh one for main and another for cgpa and gpa container
    return (
        <div className="container-md vh-60 primary-bg-color p-2 text-center mt-1">
            <p className="primary-text-color fs-m fw-light extra-help-text">{props.message}</p>
            {
                window.innerWidth > 768 ? <img src={bijomi} width="200" height="200"></img> : null
            }
            {
                window.innerWidth < 768 ? <img src={bijomi} width="100" height="100"></img> : null
            }
        </div>
    )
}

export default UserGuideContainer;