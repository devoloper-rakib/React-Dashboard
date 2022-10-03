import React, { useContext } from 'react';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import List from './pages/list/List';
import { productInputs, userInputs } from './formSource';
import './style/dark.scss';
import { DarkModeContext } from './context/darkModeContext';
import NotFound from './components/error/notFound';
import Chart from './components/chart/Chart';
function App() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={darkMode ? 'app dark' : 'app'}>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route index element={<Home />} />
						<Route path='login' element={<Login />} />

						<Route path='users'>
							<Route index element={<List />} />
							<Route path=':userId' element={<Single />} />
							<Route
								path='new'
								element={<New inputs={userInputs} title='Add New Users' />}
							/>
						</Route>
						<Route path='products'>
							<Route index element={<List />} />
							<Route path=':productId' element={<Single />} />
							<Route
								path='new'
								element={
									<New inputs={productInputs} title='Add New Products' />
								}
							/>
						</Route>
						<Route
							path='/state'
							element={
								<Chart title='this is State Status click me' aspect={3 / 1} />
							}
						/>
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
