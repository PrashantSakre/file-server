import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function Error404() {
	const navigate = useNavigate();

	function handleNavigate() {
		navigate("/");
	}

	return (
		<Card title="Error 404! Not Found.">
			<Button onClick={() => handleNavigate()} style={{ cursor: "pointer" }}>
				Go to Home
			</Button>
		</Card>
	);
}

export default Error404;
