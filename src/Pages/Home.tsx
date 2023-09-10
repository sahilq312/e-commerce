import Navbar from '../components/Navbar'

import { ProductList } from '../features/product/ProductList'




export const Home = () => {
  return (
    <Navbar>
        <ProductList/>
    </Navbar>
  )
}
