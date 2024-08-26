import { Button, Flex, Input, Space } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	decrement,
	increment,
	incrementAsync,
	incrementByAmount,
	selectCount,
} from "../../redux/Counter/counterSlice";

function Counter() {
	const navigate = useNavigate();
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState("2");

	const goDashboard = () => {
		navigate("/user/dashboard");
	};

	return (
		<Flex align="center" vertical gap={20}>
			<Space>
				<Button aria-label="Increment value" onClick={() => dispatch(increment())}>
					+
				</Button>
				<span>{count}</span>
				<Button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
					-
				</Button>
			</Space>
			<Space>
				<Input
					aria-label="Set increment amount"
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<Button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
					Add Amount
				</Button>
				<Button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
					Add Async
				</Button>
			</Space>
			<Button onClick={goDashboard}>Link to Dashboard</Button>
		</Flex>
	);
}

export default Counter;
