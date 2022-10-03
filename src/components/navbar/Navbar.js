import React, { useContext } from 'react';
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { Link } from 'react-router-dom';
// import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
	const { dispatch } = useContext(DarkModeContext);

	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='search'>
					<input type='text' placeholder='Search....' />
					<SearchOutlinedIcon />
				</div>
				<div className='items'>
					<div className='item'>
						<LanguageOutlinedIcon className='icon' />
						English
					</div>
					<div className='item'>
						<FullscreenExitOutlinedIcon className='icon' />
					</div>
					<div className='item'>
						<ChatBubbleOutlineOutlinedIcon className='icon' />
						<div className='counter'>1</div>
					</div>
					<div className='item'>
						<DarkModeOutlinedIcon
							style={{ cursor: 'pointer' }}
							className='icon'
							onClick={() => dispatch({ type: 'TOGGLE' })}
						/>
					</div>
					<div className='item'>
						<NotificationsNoneOutlinedIcon className='icon' />
						<div className='counter'>2</div>
					</div>
					<div className='item'>
						<ListOutlinedIcon />
					</div>

					<div className='item'>
						<Link to='/users/single' className='link'>
							<img
								src='https://i.ibb.co/drBCYLn/profile-1.jpg'
								alt='profile-1'
								className='avatar'
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
