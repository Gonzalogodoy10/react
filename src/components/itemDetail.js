import ItemCount from "./ItemCount"



function ItemDetail({item}){

    return(
        <div className="show">
            <article>
                <img src={item.img}></img>
                <div>
                    <div>
                        <p className="titleprod">{item.title}</p>
                        <p>{item.about}</p>
                    </div>
                    <p className="itemprice" > <strong> {item.precio} </strong>  </p>

                    <ItemCount  initial={1} stock={item.stock} onAdd={   (valor)=>  alert(`Se agregaron ${valor} ${item.title}`)}/>
                </div>
            </article>
        </div>
    )
}

export default ItemDetail