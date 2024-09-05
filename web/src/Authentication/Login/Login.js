import { Button, Col, Flex, Input, Row, Space, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api";

const { Title } = Typography;
function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', password: '' });

  function handleInputChange(e) {
    setUser(pre => {return {...pre, [e.target.name]: e.target.value}})
  }

  function handleSignIn() {
    auth.postAuthSignin(user).then(() => {
      navigate('/user/dashboard')
    })
  }
	return (
    <Flex justify="center" style={{ height: "100%" }}>
			<Row justify="center" align="middle">
				<Col>
					<Row justify="center" align="center">
						<Col>
							<Title level={4}>Welcome to </Title>
							<Title style={{ margin: 0 }}>File server</Title>
						</Col>
					</Row>
					<Title level={5}>User Login</Title>
					<Flex justify="center" style={{ marginTop: "1rem" }} vertical>
						<Space direction="vertical">
							<Input size="large" placeholder="Name" name="name" onChange={handleInputChange} />
							<Input size="large" placeholder="Password" name="password" type="password" onChange={handleInputChange}/>
							<Button type="primary" size="large" style={{ width: "100%" }} onClick={handleSignIn}>
								Sign In
							</Button>
						</Space>
					</Flex>
				</Col>
			</Row>
		</Flex>
	);
}

export default Login;
