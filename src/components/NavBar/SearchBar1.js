import { useState } from "react";
import Lupa from '../assets/iconoBusqueda.svg'




const SearchBar1 = ({onSearch})=>{

    const [valor,setValor]= useState("")

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        onSearch(valor)
    }

    const handleChange = (e)=>{
         setValor(e.target.value)
    }


    return ( 
        <div className="">
            <form onSubmit={handleSubmit} >
                
               <img src={Lupa} className="search-icon" alt="Buscar"/>
                <input onChange={handleChange} value={valor} className="search-input" placeholder="Buscar Producto"/>
                    
            </form>
            
        </div>
    )
}

export default SearchBar1;