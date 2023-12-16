import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./views/home";
import AddressDetails from "./views/addressDetails";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/:walletAddress", element: <AddressDetails /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
