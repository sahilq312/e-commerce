import { createBrowserRouter } from "react-router-dom";
//import { Blog } from '../features/counter/Blog'
import { Home } from "../Pages/Home";
import Error from "../Pages/404";
import { Cart } from "../features/cart/Cart";
import ProductDetail from "../features/product/ProductDetail";
import { Login } from "../features/auth/components/Login";
import { Register } from "../features/auth/components/Register";
import { Protected } from "../features/auth/components/Protected";
import { AdminProductList } from "../features/admin/AdminProductList";
import { ProductForm } from "../features/admin/ProductForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "cart",
    element: (
      <Protected>
        <Cart />
      </Protected>
    ),
  },
  {
    path: "product/:id",
    element: (
      <Protected>
        <ProductDetail />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/product",
    element: (
      <Protected>
        <AdminProductList></AdminProductList>
      </Protected>
    ),
  },
  {
    path: "/admin/create",
    element: (
      <Protected>
        <ProductForm></ProductForm>
      </Protected>
    ),
  },
]);
