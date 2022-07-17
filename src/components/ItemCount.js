import { useState } from 'react'


function ItemCount({initial ,stock ,onAdd}){

    const [count, setCount] = useState(initial)

    function add(){
        if(count < stock){
            setCount(count + 1)
        }
    }

    function minus(){
        if(count > initial){
            setCount(count - 1)
        }
    }

    function addToCart(){
        onAdd(count)
    }

    return(
        <div id="selector" className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-dark" onClick = {add}> + </button>
            <p id="counter"> {count} </p>
            <button type="button" className="btn btn-secondary" onClick = {minus}> - </button>
            <button id="addtocart" onClick = {addToCart} className="btn btn-success" > Add to cart </button>
        </div>
    )
}

    


export default ItemCount