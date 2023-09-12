import { createBrowserRouter} from 'react-router-dom'
//import { Blog } from '../features/counter/Blog'
import { Home } from '../Pages/Home'
import Error from '../Pages/404'
import { Cart } from '../features/cart/Cart'
import ProductDetail from '../features/product/ProductDetail'


export const router  = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '*',
        element: <Error/>
    },
    {
        path: "cart",
        element: <Cart/>
    },
    {
        path: "product/:id",
        element: <ProductDetail/>
    }

])