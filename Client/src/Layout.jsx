import React from "react";
// import Header from "./Component/Header/Header";
import { Outlet } from "react-router-dom";
import Header from "./Navbar/Navbar";

import Footer1 from "./Component/Footer/Footer";
function Layout(){
    return(
    <>
    <Header />
    <Outlet />
    <br /><br />
    <Footer1 />

    </>
    )
}
export default Layout