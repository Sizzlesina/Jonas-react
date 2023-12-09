/** @format */

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import InputField, { action as inputAction } from "./components/InputField";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/input",
    element: <InputField />,
    action: inputAction,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
