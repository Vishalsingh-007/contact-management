// Import necessary dependencies and components
import './App.css'; // Import the CSS file for styling
import Contact from './Components/Contact'; // Import the Contact component
import Sidebar from './Components/Sidebar'; // Import the Sidebar component
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import routing related dependencies
import { Provider } from 'react-redux'; // Import the Redux Provider
import store from './redux/store/store'; // Import the Redux store
import Home from "./Components/Home"; // Import the Home component
import ChartsMap from './Components/ChartsMap'; // Import the ChartsMap component
import { QueryClient, QueryClientProvider } from 'react-query'; // Import React Query dependencies

// Create a new instance of QueryClient for React Query
const queryClient = new QueryClient({});

// Define the router configuration for different pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Render the Home component for the root path
  },
  {
    path: "/contact",
    element: <Provider store={store}> <Contact/></Provider>, // Render the Contact component wrapped with Redux Provider for "/contact" path
  },
  {
    path: "/chart&map",
    element: <ChartsMap />, // Render the ChartsMap component for "/chart&map" path
  },
]);

// Main App component
function App() {
  return (
    <>
      {/* Wrap the content in QueryClientProvider to provide React Query capabilities */}
      <QueryClientProvider client={queryClient}>
        <Sidebar /> {/* Render the Sidebar component */}
        <RouterProvider router={router} /> {/* Provide the routing using the configured router */}
      </QueryClientProvider>
    </>
  );
}

export default App;
