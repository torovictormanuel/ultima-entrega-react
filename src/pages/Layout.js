import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom"
import '../components/styles/searchBar.css'

function Layout({onSearch,contClicks}){

    return(
        <>
        <NavBar onSearch={onSearch}  contClicks={contClicks} />
    
        <Outlet/>
        </>
    )
}

export default Layout;