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
    

    function handleRemove(e: MouseEvent, id: string){
      e.preventDefault()
      dispatch(deleteFromCart(id))
      navigate("/cart")
    }
  return (
    
      <>
                  <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="mt-8">
                        <div className="flow-root">
                            {status === "loading" ? <></>: null}
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product._id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.productId.thumbnail}
                                    alt="image"
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a>{product.productId.title}</a>
                                      </h3>
                                      <p className="ml-4">{product.productId.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">color</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {/* {product.stock} */}</p>

                                    <div className="flex">
                                      <button
                                      onClick={(e)=> handleRemove(e, product._id)}
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
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

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <Link
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
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
