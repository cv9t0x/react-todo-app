import {
	CssBaseline,
	StyledEngineProvider,
	ThemeProvider,
} from '@mui/material';
import { useRoutes } from 'react-router-dom';

import StoreProvider from 'components/StoreProvider';
import route from 'routes';
import theme from 'theme';

const App = () => {
	const routeEl = useRoutes([route]);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<StoreProvider>
					<CssBaseline />
					{routeEl}
				</StoreProvider>
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default App;
