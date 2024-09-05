import React from 'react';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import Add from './pages/add/Add';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gigs/Gigs';
import { Dashboard } from './pages/dashboard/Dashboard';
import  Home  from './pages/home/Home';
import { Messages } from './pages/messages/Messages';
import { Message } from './pages/message/Message';
import  MyGigs  from './pages/myGigs/MyGigs';
import { Orders } from './pages/orders/Orders';
import  BecomeSeller  from './pages/becomeSeller/BecomeSeller';
import GigDetails from './pages/gigDetails/GigDetails';
import EditGig from './pages/editGig/EditGig';
import UserProfile from './pages/profile/UserProfile';
import  AboutUs  from './pages/aboutus/AboutUs';



const queryClient = new QueryClient();

const Layout: React.FC = () => (
  <div className="app">
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/add", element: <Add /> },
      { path: "/gig/:id", element: <Gig /> },
      { path: "/gigs", element: <Gigs /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/messages", element: <Messages /> },
      { path: "/messages/:id", element: <Message /> },
      { path: "/my-gigs", element: <MyGigs /> },
      { path: "/orders", element: <Orders /> },
      { path: '/become-seller', element: <BecomeSeller /> },
      { path: '/gig/:id', element: <GigDetails /> },
      { path: '/edit-gig/:id', element: <EditGig /> },
      {path: '/profile', element: <UserProfile/>},
    ],
  },
]);
const App: React.FC = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

export default App;
