import Footer from "./Footer";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Banner from "./Banner";

export default function Main(){
    return(
        <>
         <Header/>
         <Outlet/>
         <Footer/>
        </>
    )
}