import { useState } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const thisYearData = [
	{ Key: "Jan", Actual: 4000, Target: 3800 },
	{ Key: "Feb", Actual: 3000, Target: 3200 },
	{ Key: "Mar", Actual: 5000, Target: 4500 },
	{ Key: "Apr", Actual: 4500, Target: 4200 },
	{ Key: "May", Actual: 6000, Target: 5500 },
	{ Key: "Jun", Actual: 5500, Target: 5800 },
	{ Key: "Jul", Actual: 7000, Target: 6500 },
	{ Key: "Aug", Actual: 5000, Target: 4500 },
	{ Key: "Sep", Actual: 4500, Target: 4200 },
	{ Key: "Oct", Actual: 6000, Target: 5500 },
	{ Key: "Nov", Actual: 5500, Target: 5800 },
	{ Key: "Dec", Actual: 7000, Target: 6500 },
];
const thisweekdata = [
	{ Key: "Mon", Actual: 4000, Target: 3800 },
	{ Key: "Tue", Actual: 3000, Target: 3200 },
	{ Key: "Wend", Actual: 5000, Target: 4500 },
	{ Key: "Thus", Actual: 4500, Target: 4200 },
	{ Key: "Fri", Actual: 6000, Target: 5500 },
	{ Key: "Sat", Actual: 5500, Target: 5800 },
	{ Key: "Sun", Actual: 7000, Target: 6500 },
];
const ThisMonth = [
	{ Key: "Frist", Actual: 4000, Target: 3800 },
	{ Key: "Second", Actual: 3000, Target: 3200 },
	{ Key: "Third", Actual: 5000, Target: 4500 },
	{ Key: "Fouth", Actual: 4500, Target: 4200 },

];

const Targetproduction = () => {
	const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");
	const [selectdatapakage, setSelectdatapakage] = useState(ThisMonth);

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Actual vs Target</h2>
				<select
					className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
					value={selectedTimeRange}
					onChange={(e) => {
						setSelectedTimeRange(e.target.value);
						if (e.target.value == "This Week") {
							setSelectdatapakage(thisweekdata)
						}
						if (e.target.value == "This Month") {
							setSelectdatapakage(ThisMonth)
						}
						if (e.target.value == "This Year") {
							setSelectdatapakage(thisYearData)
						}
					}}
				>
					<option>This Week</option>
					<option>This Month</option>
					<option>This Year</option>
				</select>
			</div>

			<div style={{ width: "100%", height: 400 }}>
				<ResponsiveContainer>
					<AreaChart data={selectdatapakage}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='Key' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Area type='monotone' dataKey='Actual' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
						<Area type='monotone' dataKey='Target' stroke='#10B981' fill='#10B981' fillOpacity={0.3} />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default Targetproduction;