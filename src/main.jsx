import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import Login from "./Login&Register/Login";
import Register from "./Login&Register/Register";
import MainLaout from "./Layout/MainLayout";
import MainLayout from "./Layout/MainLayout";
import AuthProviders from "./Providers/AuthProviders";
import AddBook from "./AddBook";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/addBook",
                element: <AddBook></AddBook>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProviders>
            {" "}
            <RouterProvider router={router} />
        </AuthProviders>
    </React.StrictMode>
);
