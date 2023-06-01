import NewUser from "./pages/NewUser/NewUser";
import Product from "./pages/Product/Product";
import UsersList from "./pages/Users/UsersList";
import Home from "./pages/home/Home";



let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newuser", element: <NewUser /> },
  { path: "/products", element: <Product /> },
];

export default routes;
