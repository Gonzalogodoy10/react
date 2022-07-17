import { useEffect, useState } from "react";
import {traerProds} from "../functions/function"
import '../products/products'
import ItemDetail from "./itemDetail";


function ItemDetailContainer({id}){

    const [item,setItem] = useState(null)

    const filtrarProd = (productos, id) => productos.find((itemP) => itemP.id === id);

    const getItem = async (id, setState)=>{
        try{
            const esperarProductos = await traerProds;
            setTimeout(()=>{
                setState(filtrarProd(esperarProductos, id))
            },2000)
            
        } catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getItem(id,setItem)
    },[id])

    return(
        <div className="container">
            {item ? <ItemDetail item={item}/>  : <div className="loader"></div>}
        </div>
    )
}

export default ItemDetailContainer