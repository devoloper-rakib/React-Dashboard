import React from 'react';
import './chart.scss';

import {
	ResponsiveContainer,
	ComposedChart,
	Line,
	Area,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import { useNavigate } from 'react-router-dom';

const data = [
	{
		name: 'January',
		target: 700,
		earning: 800,
		total: 800,
	},
	{
		name: 'February',
		target: 900,
		earning: 1100,
		total: 980,
	},
	{
		name: 'March',
		target: 400,
		earning: 500,
		total: 2000,
	},
	{
		name: 'April',
		target: 1580,
		earning: 1500,
		total: 1000,
	},
	{
		name: 'May',
		target: 1520,
		earning: 1100,
		total: 1500,
	},
	{
		name: 'June',
		target: 500,
		earning: 680,
		total: 1100,
	},
];

const Chart = ({ aspect, title }) => {
	const navigate = useNavigate();

	return (
		<div className='chart'>
			<div onClick={() => navigate('/')} className='title'>
				{title}
			</div>
			<ResponsiveContainer width='100%' aspect={aspect}>
				<ComposedChart
					width={500}
					height={400}
					data={data}
					margin={{
						top: 20,
						right: 20,
						bottom: 20,
						left: 20,
					}}
				>
					<CartesianGrid stroke='#f5f5f5' />
					<XAxis dataKey='name' scale='band' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Area
						type='monotone'
						dataKey='total'
						fill='#8884d8'
						stroke='#8884d8'
					/>
					<Bar dataKey='earning' barSize={20} fill='#413ea0' />
					<Line type='monotone' dataKey='target' stroke='red' />
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
