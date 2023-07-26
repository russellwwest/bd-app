import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage'
import ErrorPage from './ErrorPage'
import DashboardPage from './app/DashboardPage';
import AppLayout from './app/layouts/AppLayout';
import LoginPage from './app/auth/LoginPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'app',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />
      }
    ]
  }
]);