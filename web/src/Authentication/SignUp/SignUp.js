import { Button, Col, Flex, Input, Row, Space, Typography } from "antd";
import React from "react";

const { Title } = Typography;
function SignUp() {
	return (
		<Flex justify="center" style={{ height: "100%" }}>
			<Row justify="center" align="middle">
				<Col>
					<Row justify="center" align="middle">
						<Col>
							<Title level={4}>Welcome to</Title>
							<Title style={{ margin: 0 }}>Dashboard initial setup</Title>
						</Col>
					</Row>
					<Title level={5}>Register using your mobile number</Title>
					<Flex fluid vertical style={{ marginTop: "1rem" }}>
						<Space direction="vertical">
							<Input size="large" placeholder="Full Name" />
							<Input size="large" placeholder="Mobile Number" />
							<Input size="large" placeholder="Enter OTP" />
							<Button type="primary" size="large" style={{ width: "100%" }}>
								Send OTP
							</Button>
						</Space>
					</Flex>
				</Col>
			</Row>
		</Flex>
	);
}

export default SignUp;
