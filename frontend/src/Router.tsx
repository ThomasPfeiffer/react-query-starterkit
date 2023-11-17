import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import { QueryKeys } from "./pages/QueryKeys";
import { Introduction } from "./pages/Introduction";

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
        path: "query-keys",
        element: <QueryKeys />,
      },
    ],
  },
]);
export function Router() {
  return <RouterProvider router={router} />;
}
