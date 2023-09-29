import { MouseEvent, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { deleteFromCart, fetchCart } from "./cartSlice"
import { Link, useNavigate } from "react-router-dom"


export const Cart = () => {
    const navigate = useNavigate()
    const products = useAppSelector((state)=> state.cart.items)
    const status = useAppSelector((state)=> state.cart.status )
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(fetchCart())
    }, [dispatch])
   console.log(products);
   

 
    const totalPrice = products.reduce((total, item)=> total + item.productId.price*item.quantity,0)
   // console.log(totalPrice);
    

    function handleRemove(e: MouseEvent, id: string){
      e.preventDefault()
      dispatch(deleteFromCart(id))
       return navigate("/cart")
    }
  return (
    
      <>
                  <div classNameName="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div classNameName="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div classNameName="mt-8">
                        <div classNameName="flow-root">
                            {status === "loading" ? <></>: null}
                          <ul role="list" classNameName="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product._id} classNameName="flex py-6">
                                <div classNameName="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.productId.thumbnail}
                                    alt="image"
                                    classNameName="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div classNameName="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div classNameName="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a>{product.productId.title}</a>
                                      </h3>
                                      <p classNameName="ml-4">{product.productId.price}</p>
                                    </div>
                                    <p classNameName="mt-1 text-sm text-gray-500">color</p>
                                  </div>
                                  <div classNameName="flex flex-1 items-end justify-between text-sm">
                                    <p classNameName="text-gray-500">Qty {/* {product.stock} */}</p>

                                    <div classNameName="flex">
                                      <button
                                      onClick={(e)=> handleRemove(e, product._id)}
                                        type="button"
                                        classNameName="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div classNameName="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div classNameName="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalPrice}</p>
                      </div>
                      <p classNameName="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div classNameName="mt-6">
                        <a
                          href="#"
                          classNameName="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div classNameName="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <Link
                            type="button"
                            classNameName="font-medium text-indigo-600 hover:text-indigo-500"
                            to="/"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                
        </>
  )
}
