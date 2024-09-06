import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

const App = () => {
	const { theme, toogleTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toogleTheme}>TOGGLE</button>
			<Link to={'/'}>Main Page</Link>
			<Link to={'/about'}>About us</Link>
			<AppRouter />
		</div>
	);
};

export default App;
