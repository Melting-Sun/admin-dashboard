import NewUser from "./pages/NewUser/NewUser";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import UsersList from "./pages/Users/UsersList";
import Home from "./pages/home/Home";


let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newuser", element: <NewUser /> },
  { path: "/products", element: <Product /> },
  { path: "/product/:productID", element: <Products /> },
];

export default routes;
