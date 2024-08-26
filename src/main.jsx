import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './Application/Pages/Root/Root';
import Home from './Application/Pages/Home/Home';
import AuthProvider from './Application/Context/AuthProvider/AuthProvider';
import Signup from './Application/Pages/Authentication/Signup';
import Login from './Application/Pages/Authentication/Login';
import PropertyDetails from './Application/Pages/PropertyDetails/PropertyDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UpdateProfile from './Application/Pages/Profile/UpdateProfile';
import UserProfile from './Application/Pages/Profile/UserProfile';


// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>, 
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
        loader: ()=>fetch('/estate.json').then(res => res.json())
      },
      {
        path: '/update',
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path:'/profile',
        element:<UserProfile></UserProfile>
      }
    ]
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
);

export default router;
