import ReactDOM  from "react-dom";

function PortalComponent(){
    return ReactDOM.createPortal(<h1>This is portal component</h1>,document.getElementById('root-portal'));
}

export default PortalComponent;