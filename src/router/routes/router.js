import { createBrowserRouter } from "react-router-dom";
import Courses from "../../components/coursepage/Courses";
import Layout from "../../layout/Layout";
import Blog from "../pages/Blog";
import CourseDetails from "../pages/CourseDetails";
import CoursePage from "../pages/CoursePage";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Checkout from "../pages/private/Checkout";
import Private from "../pages/private/Private";

const router = createBrowserRouter([
    {
        path: '/',
        loader: () => fetch('http://localhost:5000/categories'),
        element: <Layout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/blog', element: <Blog />},
            {path: '/login',element: <LoginPage />},
            {
                path: '/courses',
                element: <CoursePage />,
                children: [
                    {
                        path: '/courses',
                        loader: ({params}) => fetch(`http://localhost:5000/courses/1`),
                        element: <Courses />
                    },
                    {
                        path: '/courses/:id',
                        loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
                        element: <Courses />
                    },
                ]
            },
            
            {
                path: '/coursedetail/:id',
                loader: ({params}) => fetch(`http://localhost:5000/coursedetails/${params.id}`),
                element: <CourseDetails />
            },
            {
                path: '/checkout/:id',
                loader: ({params}) => fetch(`http://localhost:5000/coursedetails/${params.id}`),
                element: <Private><Checkout /></Private>
            }
        ]
    }
]);

export default router;