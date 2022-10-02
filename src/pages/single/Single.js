import React from 'react';
import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Tables from '../../components/table/Tables';
import './single.scss';
const Single = () => {
	return (
		<div className='single'>
			<Sidebar />
			<div className='singleContainer'>
				<Navbar />

				<div className='top'>
					<div className='left'>
						<div className='editButton'>Edit</div>
						<h1 className='title'>Information</h1>
						<div className='item'>
							<img
								src='https://i.ibb.co/drBCYLn/profile-1.jpg'
								alt='profile-1'
								className='itemImg'
							/>
							<div className='details'>
								<h1 className='itemTitle'>Rakib Hasan</h1>
								<div className='detailItem'>
									<span className='itemKey'>Email:</span>
									<span className='itemValue'>rakibhasan133@gmail.com</span>
								</div>
								<div className='detailItem'>
									<span className='itemKey'>Phone:</span>
									<span className='itemValue'>54 44 54454</span>
								</div>
								<div className='detailItem'>
									<span className='itemKey'>Address:</span>
									<span className='itemValue'>
										169/b khilgoan chowdhury para Dhaka 1219
									</span>
								</div>
								<div className='detailItem'>
									<span className='itemKey'>Country:</span>
									<span className='itemValue'>Bangladesh</span>
								</div>
							</div>
						</div>
					</div>
					<div className='right'>
						<Chart aspect={3 / 1} title='User Spending ( Last 6 Months) ' />
					</div>
				</div>
				<div className='bottom'>
					<h1 className='title'>Last Transactions</h1>
					<Tables />
				</div>
			</div>
		</div>
	);
};

export default Single;
