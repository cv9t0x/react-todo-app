import { type CSSProperties } from 'react';

import theme from 'theme';
import { type TColorVariant } from 'types/color';

export const ColorVariantMap: Record<TColorVariant, CSSProperties['color']> = {
	success: theme.palette.success.main,
	error: theme.palette.error.main,
	warning: theme.palette.warning.main,
};
