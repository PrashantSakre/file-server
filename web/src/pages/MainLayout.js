import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Layout, Menu, Typography, theme } from "antd";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Error404 from "../components/Errror404";
import Dashboard from "./Dashboard/Dashboard";

const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;
const sidebarRoutes = [
	{
		icon: UploadOutlined,
		route: "dashboard",
		label: "Dashboard",
		key: 1,
	},
	{
		icon: UserOutlined,
		route: "profile",
		label: "Profile",
		key: 2,
	},
];

function MainLayout() {
	const {
		token: { colorBgContainer, colorBgLayout, borderRadius },
	} = theme.useToken();
	const navigate = useNavigate();

	return (
		<Layout style={{ height: "100%" }}>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				theme="light"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
			>
				<div
					style={{
						height: "40px",
						background: colorBgLayout,
						margin: "5px",
						borderRadius,
					}}
				/>
				<Menu
					theme="light"
					mode="inline"
					defaultSelectedKeys={["1"]}
					items={sidebarRoutes.map((item, index) => ({
						key: String(index + 1),
						icon: React.createElement(item.icon),
						label: item.label,
						onClick: () => {
							navigate(`/user/${item.route}`);
						},
					}))}
				/>
			</Sider>
			<Layout style={{ overflow: "auto" }}>
				<Header
					style={{
						margin: "24px 16px 0",
						padding: "0px 20px",
						alignItems: "center",
						display: "flex",
						background: colorBgContainer,
					}}
				>
					<Title style={{ margin: 0 }}>Header</Title>
				</Header>
				<Content
					style={{
						margin: "24px 16px 0",
						minHeight: "unset",
					}}
				>
					<Routes>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/profile" element={<Card>Profile</Card>} />
						<Route path="/*" element={<Error404 />} />
					</Routes>
				</Content>
				<Footer
					style={{
						textAlign: "center",
					}}
				>
					Footer ©{new Date().getFullYear()}
				</Footer>
			</Layout>
		</Layout>
	);
}
export default MainLayout;
