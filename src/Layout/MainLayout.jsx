import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="sticky top-0">
                <NavigationBar></NavigationBar>
            </div>
            <div className="mx-auto min-h-[91vh] max-w-7xl px-4">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
