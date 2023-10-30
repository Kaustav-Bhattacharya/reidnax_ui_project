import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/login";
import { Analytics } from "./components/analytics";
import { Data } from "./components/data";
import { Fallback } from "./pages/fallback";
import { useState } from "react";

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const auth = () => setIsUserAuthenticated(!isUserAuthenticated);
  const routerConfig = isUserAuthenticated
    ? [
        {
          path: "/",
          element: <Dashboard />,
          children: [
            {
              path: "analytics",
              element: <Analytics />,
            },
            {
              path: "data",
              element: <Data />,
            },
          ],
        },
      ]
    : [
        {
          path: "/",
          element: <Login auth={auth} />,
        },
      ];

  const router = createBrowserRouter([
    ...routerConfig,
    {
      path: "*",
      element: <Fallback />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
