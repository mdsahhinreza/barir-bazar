import { createBrowserRouter } from "react-router-dom";
import Guest from "../../Layout/Guest/Guest";
import Homepage from "../../Pages/Home/HomePage/Homepage";
import ShopPage from "../../Pages/Shop/ShopPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Guest></Guest>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            },
            {
                path: '/shop',
                element: <ShopPage></ShopPage>
            },
        ]

    }
]);

export default router;