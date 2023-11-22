import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import { Invalidation } from "./pages/Invalidation";
import { Introduction } from "./pages/Introduction";
import { QueryBasics } from "./pages/QueryBasics";
import { Mutations } from "./pages/Mutations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "introduction",
        element: <Introduction />,
      },
      {
        path: "query-basics",
        element: <QueryBasics />,
      },
      {
        path: "mutations",
        element: <Mutations />,
      },
      {
        path: "invalidation",
        element: <Invalidation />,
      },
    ],
  },
]);
export function Router() {
  return <RouterProvider router={router} />;
}
