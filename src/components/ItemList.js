import { useEffect, useState } from "react"
import Item from "./Item"
import { traerProds } from "../functions/function"

function ItemList(){
    const [prods,setProds] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(()=>{
        traerProds
        .then((res)=> setProds(res))
        .finally(()=> setLoad(!load))
    },[])

    
    return(
        <div className="container-product">
            {
            load ?
            <div className="loader"></div>
            :
            prods.map((product)=>{
                return(
                    
                    <div className = "productcards" key={product.id}>
                        <Item
                            title={product.title}
                            price={product.precio}
                            imgUrl={product.img}
                            stock={product.stock}
                            description={product.description}
                        />
                    </div>
                )
            })
            }
        </div>
    )
}

export default ItemList