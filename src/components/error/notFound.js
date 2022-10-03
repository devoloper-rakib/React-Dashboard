import React from 'react';
import { useNavigate } from 'react-router-dom';
import './notFound.scss';
const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className='not'>
			<h1>404 Error The Web page you want its not available right now</h1>
			<button onClick={() => navigate('/')}>
				Please Click Me to go Home Page
			</button>
		</div>
	);
};

export default NotFound;
