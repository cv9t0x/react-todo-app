import { Box, styled } from '@mui/material';

export const ModalContainer = styled(Box)(({ theme }) => ({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: theme.breakpoints.values.sm,
	width: '100%',
}));
