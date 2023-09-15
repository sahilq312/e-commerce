import { createBrowserRouter} from 'react-router-dom'
//import { Blog } from '../features/counter/Blog'
import { Home } from '../Pages/Home'
import Error from '../Pages/404'
import { Cart } from '../features/cart/Cart'
import ProductDetail from '../features/product/ProductDetail'
import { Login } from '../features/auth/components/Login'
import { Register } from '../features/auth/components/Register'


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
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }

])