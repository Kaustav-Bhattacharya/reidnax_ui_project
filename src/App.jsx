import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/login";
import { Analytics } from "./components/analytics";
import { Data } from "./components/data";
import { Fallback } from "./pages/fallback";
import { useState } from "react";

function App() {
  // You would typically have a function to check the user's authentication status.
  // For this example, let's assume you have an `isUserAuthenticated` variable.
  const [isUserAuthenticated , setIsUserAuthenticated] = useState(false);
  
  const auth = () => setIsUserAuthenticated(!isUserAuthenticated)
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
          element: <Login auth={auth}/>,
        },
      ];

  // If not authenticated, the route "/" points to the Login component.
  // If authenticated, the route "/" points to the Dashboard component.

  // Additionally, you have the catch-all route ("*") for unmatched routes.

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
