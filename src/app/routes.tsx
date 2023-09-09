import { createBrowserRouter} from 'react-router-dom'
import { Blog } from '../features/counter/Blog'


export const router  = createBrowserRouter([
    {
        path: '/',
        element: <Blog/>
    },
    
])