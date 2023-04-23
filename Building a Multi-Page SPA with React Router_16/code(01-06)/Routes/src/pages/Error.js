import MainNavigation from "../components/MainNavigation";

function ErrorPage(){
    return(
        <>
        <MainNavigation/>
        <main>
            <h1>An error Occurred!</h1>
            <p>Could not find this page!</p>
        </main>
        </>
    )
}

export default ErrorPage;