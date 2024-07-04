import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Notification from './components/Notification.jsx';
import Panel from './components/Panel.jsx';
import UserProvider from './hooks/UserProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Panel />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <UserProvider >
        <RouterProvider router={router} />
      </UserProvider>
  </React.StrictMode>
);