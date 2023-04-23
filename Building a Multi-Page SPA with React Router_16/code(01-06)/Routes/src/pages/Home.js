import { Link, useNavigate } from "react-router-dom";
function HomePage(){

    const navigate=useNavigate();

    const navigateHandler=()=>{
        navigate('/products');
    }
    return(
    <>
    <h1>My Home page</h1>
    <p>
        Go to <Link to="products">the list of products</Link>
    </p>
    <p>
        <button onClick={navigateHandler}>Navigate</button>
    </p>
    </>
    );
}

export default HomePage;