import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchCart } from "./cartSlice"


export const Cart = () => {
    const products = useAppSelector((state)=> state.cart.items)
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(fetchCart())
    }, [dispatch])
    console.log(products);
    
  return (
    <div>
        <h1>Cart</h1>
        <ul>
            {products.map((product)=> (
                <li key={product.id}>
                    <>{product.title}</>
                </li>
            ))}
        </ul>
    </div>
  )
}
