import ItemCount from "../components/ItemCount"


function Item({id,title,price,imgUrl,stock,description}){

    return(
        <div className="product">
            <div className="container-img">
            <img src={imgUrl} />
            </div>
            <div className="container-info">
            <p className="title-product">{title}</p>
            <p>{price}</p>
            <a className="details" href="#">{description}</a>
            </div>
            <ItemCount initial={1}  stock={stock} onAdd={(count)=>alert(`Se han agregado ${count} productos al carrito`)} /> 
        </div>
    )
}

export default Item