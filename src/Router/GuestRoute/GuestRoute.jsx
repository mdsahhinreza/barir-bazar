import { createBrowserRouter } from "react-router-dom";
import Guest from "../../Layout/Guest/Guest";
import Homepage from "../../Pages/Home/HomePage/Homepage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Guest></Guest>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            },
        ]

    }
]);

export default router;