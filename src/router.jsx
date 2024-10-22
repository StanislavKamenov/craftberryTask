import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';
import Results from './pages/Results/Results';
import Quiz from './pages/Quiz/Quiz';
import Start from './pages/Start/Start';
import Root from './pages/Root/Root';

export const router = createBrowserRouter([
	{
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Start />,
				errorElement: <ErrorPage />,
			},
			{
				path: '/quiz',
				element: <Quiz />,
				errorElement: <ErrorPage />,
			},
			{
				path: '/results',
				element: <Results />,
				errorElement: <ErrorPage />,
			},
		]
	},
]);
