import { ConfigProvider } from "antd";
import React from "react";
import AppRoutes from "./routes";
import "./App.css";

function App() {
	return (
		<div style={{ height: "100vh" }}>
			<ConfigProvider
				theme={{
					token: {
						// Seed Token
					},
				}}
			>
				<AppRoutes />
			</ConfigProvider>
		</div>
	);
}

export default App;
