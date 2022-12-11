import { Circle as CircleIcon } from '@mui/icons-material';
import { Box, styled, Typography, type TypographyProps } from '@mui/material';

import { ColorVariantMap } from 'constants/color';
import { type TColorVariant } from 'types/color';

export const TodoCardImportance = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(1),
	marginBottom: theme.spacing(1.5),
}));

export const TodoCardImportanceIcon = styled(CircleIcon)(({ color }) => ({
	...(Object.keys(ColorVariantMap).includes(String(color)) && {
		color: ColorVariantMap[color as TColorVariant],
	}),
}));

interface TodoCardImportanceTitleProps extends TypographyProps {
	colorVariant: TColorVariant;
}

export const TodoCardImportanceTitle = styled(Typography, {
	shouldForwardProp: prop => prop !== 'colorVariant',
})<TodoCardImportanceTitleProps>(({ theme, colorVariant }) => ({
	...theme.typography.subtitle2,
	color: ColorVariantMap[colorVariant],
}));
