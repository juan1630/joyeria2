import { createBrowserRouter, Route } from "react-router-dom"
import App from "../App"
import { ContactSection } from '../components/main-screen/ContactSection';

export const AppRoutes = createBrowserRouter([
    {path: 'home', element: <App /> },
    {path: 'contact', element: <ContactSection /> }
])