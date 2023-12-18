import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./views/home";
import AddressDetails from "./views/addressDetails";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/:walletAddress", element: <AddressDetails /> },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

export default App;
