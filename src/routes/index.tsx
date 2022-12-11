import { Navigate, type RouteObject } from 'react-router-dom';

import Home from 'pages/Home';
import { ERoute } from 'types/route';

const route: RouteObject = {
	path: ERoute.ROOT,
	children: [
		{
			index: true,
			element: <Home />,
		},
		{
			path: ERoute.NOT_FOUND,
			element: <Navigate to={ERoute.ROOT} />,
		},
	],
};

export default route;
