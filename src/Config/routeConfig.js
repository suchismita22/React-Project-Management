import {createBrowserRouter} from "react-router-dom"
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetail";
import Cart from "../Pages/Cart/Cart";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    id:0,
    path: "/",
    element: <Home />,
    name:"Home",
  },
  {
    id:1,
    path: "/about",
    element: <About />,
    name:"About",
  },
  {
    id:2,
    path: "/products",
    element: <Products />,
    name:"Products",
  },
  {
    id:3,
    path: "/productDetails",
    element: <ProductDetails />,
    name:"Product Details",
  },
  {
    id:4,
    path: "/cart",
    element: <Cart />,
    name:"Cart",
  },
  {
    id: 5,
    path: '/login',
    element: <SignIn />,
    index: true,
  },
  {
    id: 6,
    path: '/signup',
    element: <SignUp />,
  },
]);
