import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./views/home";
import AddressDetails from "./views/addressDetails";
import TrackedWallets from "./views/trackedWallets";
import { useUser } from "./hooks/useUser";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/:walletAddress", element: <AddressDetails /> },
  { path: "my-wallets", element: <TrackedWallets /> },
]);

const App = () => {
  useUser();
  return <RouterProvider router={router} />;
};

export default App;
