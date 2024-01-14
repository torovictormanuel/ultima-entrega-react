 function Contador({resta,suma}) {



    
  
    return (
       <div className="contador">
           <button  onClick={resta} className="manejadores">-</button>
           <p>Agregar</p>
           <button  onClick={suma}  className="manejadores">+</button>
        </div>
    )
 }
 export default Contador;