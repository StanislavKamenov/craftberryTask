import { Link, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div className={'error-container'}>
			<h1>{error.status}</h1>
			<h2>{error.message}</h2>
			<Link to={'/'}><button>Home</button></Link>
		</div>
	);
};
