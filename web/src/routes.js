import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Authentication/Login/Login";
import SignUp from "./Authentication/SignUp/SignUp";
import Counter from "./components/Counter/Counter";
import Error404 from "./components/Errror404";
import MainLayout from "./pages/MainLayout";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Counter />} exact />
			<Route path="/login" element={<Login />} exact />
			<Route path="/signup" element={<SignUp />} exact />
			<Route path="/user/*" element={<MainLayout />} exact />
			<Route path="/*" element={<Error404 />} exact />
		</Routes>
	);
}

export default AppRoutes;
