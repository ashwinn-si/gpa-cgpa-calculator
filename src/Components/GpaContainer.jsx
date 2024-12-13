import "../Styles/CommonStyle.css"

function GpaContainer({children}) {
    //vh-70 class need to add
    return (
        <div className="container-md vh-70 primary-bg-color p-2 text-center mt-1">
            <p>dasdas</p>
            {children}
        </div>
    )
}
export default GpaContainer;