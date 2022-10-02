import React, { useState } from 'react';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { userColumns, userRows } from '../../DatatableSource';

const Datatable = () => {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const actionColumn = [
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: (params) => {
				return (
					<div className='cellAction'>
						<Link to='/users/single' style={{ textDecoration: 'none' }}>
							<div className='viewButton'>View</div>
						</Link>
						<div
							className='deleteButton'
							onClick={() => handleDelete(params.row.id)}
						>
							delete
						</div>
					</div>
				);
			},
		},
	];

	return (
		<div className='datatable'>
			<div className='dataTableTitle'>
				Add New Users
				<Link className='link' to='/users/new'>
					Add New
				</Link>
			</div>

			<DataGrid
				className='datagrid'
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};

export default Datatable;
