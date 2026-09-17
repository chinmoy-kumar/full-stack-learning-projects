
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import WeatherDetails from "./pages/weatherDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {index: true, element:<Home/>},
    ]
  },
  {
    path: "/weatherDetails",
    element: <WeatherDetails />,
  },
]);


function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
