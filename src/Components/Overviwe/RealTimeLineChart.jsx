import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Flag } from "lucide-react";

const CopperLenght = [
	{ time: new Date().toLocaleTimeString(), value: 100 },


];


const RealTimeLineChart = () => {
	// IsWebsocketConnected?
	const [IsServerConnet, setIsServerContect] = useState(false);
	useEffect(() => {
		const websocket = new WebSocket('https://googlesheet-yuetcisb.b4a.run/');
		websocket.onopen = () => {
			console.log('WebSocket is connected');
			setIsServerContect(true);

		};
		websocket.onclose = () => {
			setIsServerContect(false);
		};
		//Handle incomming dta
		websocket.onmessage = (event) => {
			try {
				const newData = JSON.parse(event.data); // Assume the WebSocket message contains the data as JSON
               const{current_breaking_time}=newData;
				console.log(newData);
			} catch {
				console.log("Cannot Handle Incomming Data")
			}
		};
		// Clean up WebSocket connection when the component is unmounted
		return () => {
			websocket.close();
		};

	}, [])

	//RealTime Linechart Updates
	const [data, setData] = useState([]);

	// Simulate real-time data
	useEffect(() => {
		const interval = setInterval(() => {
			const currentTime = new Date().toLocaleTimeString();
			const newValue = Math.floor(Math.random() * 100);
			const newData = { time: currentTime, value: newValue };
			setData((prevData) => [...prevData, newData].slice(-20)); // Keep only the last 20 data points
		}, 1000);

		return () => clearInterval(interval);  // Cleanup on unmount
	}, []);
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Wire Lenght  Server is {IsServerConnet ? "Connected!" : "Disconnect"}</h2>

			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={data}>
						<CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
						<XAxis dataKey="time" stroke="#9ca3af" />
						<YAxis stroke="#9ca3af" />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)", // Dark background with transparency
								borderColor: "#4B5563", // Dark border
							}}
							itemStyle={{ color: "#E5E7EB" }} // Light text color
						/>

						<Line type="monotone" dataKey="value" stroke="#8884d8"
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default RealTimeLineChart;