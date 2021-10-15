import React from 'react';
import Walker from './components/Walker';
import Light from './components/Light';
import { message } from 'antd';
import './App.css';

function App() {
	const [currentLight, setCurrentLight] = React.useState(0);
	const lights = [
		{
			color: "red", //颜色
			on: false, // 开关
			twinkle: true, // 最后是否闪烁
			twinkleDuration: 4000, // 闪烁时间
			twinkleInterval: 500, // 闪烁间隔
			duration: 15000, // 恒亮时间
		},
		{
			color: "green",
			on: false,
			twinkle: true,
			twinkleDuration: 4000,
			twinkleInterval: 500,
			duration: 15000,
		},
	];

	const callback = () => {
		setCurrentLight((currentLight+1) % 2);
	};

	const handleCheck = () => {
		if(currentLight === 0) {
			message.error({
				content: "小朋友，你闯红灯啦！",
				style: {
					fontSize: 20,
					marginTop: '12vh',
				},
			});
			return false;
		} else {
			message.success({
				content: "真棒，遵守交规的好孩子！",
				style: {
					fontSize: 20,
					marginTop: '12vh',
				},
			});
			return true;
		}
	};

	return (
		<div className="App">
			<div className="lights">
				{lights.map((item, index) => (
					<Light 
						key={index}
						on={currentLight === index}
						color={item.color}
						twinkle={item.twinkle}
						twinkleDuration={item.twinkleDuration}
						twinkleInterval={item.twinkleInterval}
						duration={item.duration}
						callback={callback}
					/>
				))}
			</div>
			<Walker handleCheck={handleCheck}/>
		</div>
	);
}

export default App;
