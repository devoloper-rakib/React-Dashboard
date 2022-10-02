import React from 'react';
import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const featured = () => {
	return (
		<div className='featured'>
			<div className='top'>
				<h1 className='title'>Total Revenue</h1>
				<MoreVertIcon fontSize='small' />
			</div>
			<div className='bottom'>
				<div className='featuredChart'>
					<CircularProgressbar value={70} text={'70%'} strokeWidth={4} />
				</div>
				<p className='title'>Total Sales Made Today</p>
				<p className='amount'>$35</p>
				<p className='desc'>
					Previous Transition . Last Payments May not be included
				</p>
				<div className='summary'>
					<div className='item'>
						<div className='itemTitle'>Target</div>
						<div className='itemResult negative'>
							<KeyboardArrowDownIcon fontSize='small' />
							<div className='resultAmount'>$40.4k</div>
						</div>
					</div>

					<div className='item'>
						<div className='itemTitle'>Last Week</div>
						<div className='itemResult positive'>
							<KeyboardArrowUpOutlinedIcon fontSize='small' />
							<div className='resultAmount'>$100.5k</div>
						</div>
					</div>

					<div className='item'>
						<div className='itemTitle'>Last Month</div>
						<div className='itemResult negative'>
							<KeyboardArrowDownIcon fontSize='small' />
							<div className='resultAmount'>$1000.4k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default featured;
