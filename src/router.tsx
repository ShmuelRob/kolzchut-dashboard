import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/login/Login.tsx";
import ProtectedRoute from "./auth/protectedRoute.tsx";
import Dashboard from "./pages/dashboard/dashboard.tsx";

export const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/",
		element: <ProtectedRoute />,
		children: [
			{
				path: "dashboard",
				element: <Dashboard />,
			},
		],
	},
	{
		path: "*",
		element: <Navigate to="/login" replace />,
	},
]);
