import { createBrowserRouter } from "react-router-dom";
import Courses from "../../components/coursepage/Courses";
import Layout from "../../layout/Layout";
import Blog from "../pages/Blog";
import CourseDetails from "../pages/CourseDetails";
import CoursePage from "../pages/CoursePage";
import Home from "../pages/Home";
import LoginPage from "../pages/public/LoginPage";
import Checkout from "../pages/private/Checkout";
import Private from "../pages/private/Private";
import PublicOnly from "../pages/public/PublicOnly";
import Faq from "../pages/Faq";

const router = createBrowserRouter([
    {
        path: '/',
        loader: () => fetch('https://course-ful-server.vercel.app/categories'),
        element: <Layout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/blog', element: <Blog />},
            {path: '/login',element: <PublicOnly><LoginPage /></PublicOnly>},
            {
                path: '/courses',
                element: <CoursePage />,
                children: [
                    {
                        path: '/courses',
                        loader: ({params}) => fetch(`https://course-ful-server.vercel.app/courses/1`),
                        element: <Courses />
                    },
                    {
                        path: '/courses/:id',
                        loader: ({params}) => fetch(`https://course-ful-server.vercel.app/courses/${params.id}`),
                        element: <Courses />
                    },
                ]
            },
            
            {
                path: '/coursedetail/:id',
                loader: ({params}) => fetch(`https://course-ful-server.vercel.app/coursedetails/${params.id}`),
                element: <CourseDetails />
            },
            {
                path: '/checkout/:id',
                loader: ({params}) => fetch(`https://course-ful-server.vercel.app/coursedetails/${params.id}`),
                element: <Private><Checkout /></Private>
            },
            {
                path: '/faq',
                element: <Faq />
            }
        ]
    }
]);

export default router;