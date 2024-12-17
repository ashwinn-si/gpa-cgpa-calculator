function UserGuideContainer(props) {
    //use props for selecting the img
    //use props for vh as there will be two two vh one for main and another for cgpa and gpa container
    return (
        <div className="container-md vh-60 primary-bg-color p-2 text-center mt-1">
            <p className="primary-text-color fs-m fw-light">{props.message}</p>
        </div>
    )
}

export default UserGuideContainer;