import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import './new.scss';

const New = ({ inputs, title }) => {
	const [file, setFile] = useState('');
	console.log(file);
	return (
		<div className='new'>
			<Sidebar />
			<div className='newContainer'>
				<Navbar />
				<div className='top'>
					<h1>{title}</h1>
				</div>
				<div className='bottom'>
					<div className='left'>
						<img
							src={
								file
									? URL.createObjectURL(file)
									: 'https://i.ibb.co/NZkvyWJ/no-image-icon-0.jpg'
							}
							alt='NO-Images icon'
						/>
					</div>
					<div className='right'>
						<form>
							<div className='formInput'>
								<label htmlFor='file'>
									Image : <DriveFolderUploadIcon className='icon' />
								</label>
								<input
									onChange={(e) => setFile(e.target.files[0])}
									type='file'
									id='file'
									style={{ display: 'none' }}
								/>
							</div>

							{inputs.map((input) => (
								<div className='formInput' key={input.id}>
									<label>{input.label}</label>
									<input type={input.type} placeholder={input.placeholder} />
								</div>
							))}

							<button>Create</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
