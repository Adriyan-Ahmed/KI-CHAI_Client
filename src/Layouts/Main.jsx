import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Main = () => {
    return (
        <>
            <header className="max-w-[1920px] mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="max-w-[1920px] mx-auto min-h-screen">
                <Outlet></Outlet>
            </main>
            <footer className="max-w-[1920px] mx-auto"></footer>
        </>
    );
};

export default Main;