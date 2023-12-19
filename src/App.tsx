import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./views/home";
import AddressDetails from "./views/addressDetails";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TrackedWallets from "./views/trackedWallets";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/:walletAddress", element: <AddressDetails /> },
  { path: "my-wallets", element: <TrackedWallets /> },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

export default App;
