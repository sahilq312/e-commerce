import { createBrowserRouter} from 'react-router-dom'
//import { Blog } from '../features/counter/Blog'
import { Home } from '../Pages/Home'
import Error from '../Pages/404'


export const router  = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '*',
        element: <Error/>
    }

])