import { type ThemeOptions } from '@mui/material';

const components: ThemeOptions['components'] = {
	MuiSvgIcon: {
		defaultProps: {
			color: 'inherit',
			fontSize: 'small',
		},
		styleOverrides: {
			fontSizeSmall: {
				fontSize: 14,
			},
		},
	},
	MuiButton: {
		defaultProps: {
			variant: 'contained',
		},
		styleOverrides: {
			root: {
				textTransform: 'none',
			},
		},
	},
	MuiCard: {
		defaultProps: {
			variant: 'outlined',
		},
	},
	MuiCardHeader: {
		defaultProps: {
			titleTypographyProps: {
				variant: 'h6',
			},
		},
	},
};

export default components;
