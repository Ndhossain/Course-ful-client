import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layout/Layout";
import Blog from "../pages/Blog";
import CourseDetails from "../pages/CourseDetails";
import CoursePage from "../pages/CoursePage";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/blog', element: <Blog />},
            {path: '/login',element: <LoginPage />},
            {path: '/courses', element: <CoursePage />},
            {path: '/courses/:id', element: <Courses />},
            {path: '/coursedetail/:id', element: <CourseDetails />},
        ]
    }
]);

export default router;