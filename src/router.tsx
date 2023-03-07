import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import ButtonView from "./views/ButtonView";
import TypographyView from "./views/TypographyView";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <ButtonView />
            }, {
                path: '/typography',
                element: <TypographyView />
            }
        ]
    }
])

export default router;