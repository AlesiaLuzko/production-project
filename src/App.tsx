import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';
import './styles/index.scss';

const App = () => {
	const { theme, toogleTheme } = useTheme();
	const bool = true;
	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toogleTheme}>TOGGLE</button>
			<Link to={'/'}>Main Page</Link>
			<Link to={'/about'}>About us</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageAsync />} />
					<Route path={'/'} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
