
import { productsList } from '../products/products'

const traerProds = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(productsList),2000)
})


export {traerProds}
