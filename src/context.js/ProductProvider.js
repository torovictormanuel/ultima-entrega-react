import { useState,useEffect,createContext } from "react";
import {db} from '../config/firebase'
import { collection,getDocs } from "firebase/firestore";


export const ProductContex = createContext(null)

export const ProductoProvider = ({children})=>{
  
  const [itemList, setItemList] = useState([])
  

  const itemsCollectionRef = collection(db, "productos");

const getItemList = async () => {
  const data = await getDocs(itemsCollectionRef)
  const filtroData = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }))
  setItemList(filtroData)
}

useEffect(() => {
  getItemList();
}, [])




    return(<ProductContex.Provider value={itemList}>
        {children}
        </ProductContex.Provider>)
 }

