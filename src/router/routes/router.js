import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layout/Layout";
import CourseDetails from "../pages/CourseDetails";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/login', element: <Login />},
            {path: '/regestration', element: <Register />},
            {path: '/courses/:id', element: <Courses />},
            {path: '/coursedetail/:id', element: <CourseDetails />},
        ]
    }
]);

export default router;