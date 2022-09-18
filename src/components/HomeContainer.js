import Home from "../pages/Home";
import Landing from "../pages/Landing";

const HomeContainer = () => {
    const ageVerification = document.cookie.split(';').some((item) => item.trim().startsWith('verified='));
    const page = ageVerification ? <Home /> : <Landing />;
    return (
        <>
            {page}
        </>
    );
}

export default HomeContainer;