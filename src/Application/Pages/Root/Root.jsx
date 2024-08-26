import { Outlet } from "react-router-dom";
import Heading from "../../components/Header/Heading/Heading";
import Navbar from "../../components/Header/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const Root = () => {
    return (
        <>
        <div className="lg:max-w-6xl md:max-w-screen-md max-w-fit lg:mx-auto md:mx-auto mx-auto text-center space-y-5">
            <div className="mt-4"><Heading ></Heading></div>
            <div><Navbar></Navbar></div>
            <Outlet className="border"></Outlet>
        </div>
        <div><Footer></Footer></div>
        </>
    );
};

export default Root;