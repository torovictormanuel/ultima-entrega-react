import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom"
import '../components/styles/searchBar.css'


function Layout(){

    return(
        <>    
        <NavBar />
        <Outlet/>
        </>
    )
}

export default Layout;