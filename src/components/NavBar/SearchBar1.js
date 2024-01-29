import { useState } from "react";
import Lupa from '../assets/iconoBusqueda.svg'
import { ProductContex } from '../../context.js/ProductProvider';
import { useContext } from 'react';



const SearchBar1 = ({handleBusqueda})=>{
    
    const {itemList} = useContext(ProductContex)
   
    console.log("llega el arreglo",itemList);
    
    const [searchResult,setSearchResults]=useState([])

    
    const handleChange = (e)=>{
         setSearchResults(e.target.value)
    }

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        handleBusqueda(searchResult)


    return ( 
        <div className="">
            <form onSubmit={handleSubmit} >
                
               <img src={Lupa} className="search-icon" alt="Buscar"/>
                <input onChange={handleChange} value={searchResult} className="search-input" placeholder="Buscar Producto"/>
                    
            </form>
            
        </div>
    )
}
}
export default SearchBar1;