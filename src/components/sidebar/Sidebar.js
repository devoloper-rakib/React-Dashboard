import React, { useContext } from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
	const { dispatch } = useContext(DarkModeContext);

	return (
		<div className='sidebar'>
			<div className='top'>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<span className='logo'>Admin</span>
				</Link>
			</div>
			<hr />
			<div className='center'>
				<ul>
					<p className='title'>MAIN</p>
					<li>
						<DashboardIcon className='icon' />
						<span>Dashboard</span>
					</li>
					<p className='title'>LISTS</p>

					<Link to='/users' style={{ textDecoration: 'none' }}>
						<li>
							<PersonOutlineSharpIcon className='icon' />
							<span>User</span>
						</li>
					</Link>
					<Link to='/products' style={{ textDecoration: 'none' }}>
						<li>
							<ProductionQuantityLimitsIcon className='icon' />
							<span>Products</span>
						</li>
					</Link>
					<li>
						<CreditCardIcon className='icon' />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingIcon className='icon' />
						<span>Delivery</span>
					</li>
					<p className='title'>USEFUL</p>

					<li>
						<InsertChartOutlinedIcon className='icon' />
						<span>Stats</span>
					</li>

					<li>
						<CircleNotificationsIcon className='icon' />
						<span>Notifications</span>
					</li>
					<p className='title'>SERVICES</p>

					<li>
						<HealthAndSafetyIcon className='icon' />
						<span>System Health</span>
					</li>
					<li>
						<PsychologyAltIcon className='icon' />
						<span>Logs</span>
					</li>
					<li>
						<SettingsIcon className='icon' />
						<span>Settings</span>
					</li>
					<p className='title'>USER</p>

					<li>
						<AccountCircleOutlinedIcon className='icon' />
						<span>Profile</span>
					</li>
					<li>
						<LogoutOutlinedIcon className='icon' />
						<span>LOG Out</span>
					</li>
				</ul>
			</div>
			<div className='bottom'>
				<div
					className='colorOption'
					onClick={() => dispatch({ type: 'LIGHT' })}
				></div>
				<div
					className='colorOption'
					onClick={() => dispatch({ type: 'DARK' })}
				></div>
				<div className='colorOption'></div>
			</div>
		</div>
	);
};

export default Sidebar;
