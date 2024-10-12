import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./comp/RootLayout";
import Home from "./comp/Hom";
import Signup from "./comp/Signup";
import Signin from "./comp/Signin";
import Tech from "./comp/tech";
import Vue from "./comp/Vue";
import Angular from "./comp/Angular";
import Reactjava from "./comp/Reactjava";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const broobj = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "signin",
          element: <Signin />,
        },
        {
          path: "tech",
          element: <Tech />,
          children: [
            {
              path: "vue",
              element: <Vue />,
            },
            {
              path: "angular",
              element: <Angular />,
            },
            {
              path: "reactjava",
              element: <Reactjava />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={broobj} />
    </div>
  );
}

export default App;
