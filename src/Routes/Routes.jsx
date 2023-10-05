import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Pages/Error/Error"
import Home from "../Pages/Home/Home";
import BookingDetails from "../Pages/BookingDetails/BookingDetails";

const Routes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/bookingDetails',
            element: <BookingDetails></BookingDetails>
         }
      ]
   }
])

export default Routes;