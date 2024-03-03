import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import Root from "./component/Root/Root";
import Home from "./component/home/Home";
import Products from "./component/product/Product";
import Signin from "./component/sigin/Sigin";
import Signup from "./component/signup/Signup";
import Cart from "./component/cart/Cart";
import Man from "./component/Catogeries/type/Man";
import Appliances from "./component/Catogeries/type/Appliances";
import Beauty from "./component/Catogeries/type/Beauty";
import Electronics from "./component/Catogeries/type/Electronics";
import Fragrances from "./component/Catogeries/type/Fragrances";
import Kitchen from "./component/Catogeries/type/Kitchen";
import Laptops from "./component/Catogeries/type/Laptops";
import Mobile from "./component/Catogeries/type/Mobile";
import Wemon from "./component/Catogeries/type/Wemon";
import Catogeries from "./component/Catogeries/Catogeries";

function App(){
  const handleCategorySelect = (categoryName) => {
    console.log(`Selected category Name: ${categoryName}`);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/signin", element: <Signin /> },
        { path: "/signup", element: <Signup /> },
        { path: "/cart", element: <Cart /> },
        { path: "/men's-fashion", element: <Man /> },
        { path: "/home-&-kitchen", element: <Kitchen /> },
        { path: "/appliances", element: <Appliances /> },
        { path: "/electronics", element: <Electronics /> },
        { path: "/fragrances", element: <Fragrances /> },
        { path: "/women's-fashion", element: <Wemon /> },
        { path: "/mobile", element: <Mobile /> },
        { path: "/laptops-&-accessories", element: <Laptops /> },
        { path: "/beauty", element: <Beauty /> },
        { path: "/catogeries/:categoryName", element: <Catogeries onCategorySelect={handleCategorySelect} /> },
        { path: "/catogeries", element: <Catogeries onCategorySelect={handleCategorySelect} /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;


