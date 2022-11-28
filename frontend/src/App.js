import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Category1Add from "./components/Category1Add";
import Category1All from "./components/Category1All";
import Header from "./components/Header";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "categories",
          element: <Category1All />
        },
        {
          path: "categories/add",
          element: <Category1Add />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
