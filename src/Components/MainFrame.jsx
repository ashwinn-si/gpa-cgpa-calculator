import "../Styles/CommonStyle.css"
function MainFrame({ children }) {
    return (
        <div className="container-fluid primary-bg-color vw-100 vh-100 p-2 custom-main-border overflow-x-hidden overflow-y-auto custom-scrollbar-main">
            {children}
        </div>
    );
}

export default MainFrame;