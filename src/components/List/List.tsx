import { type CSSProperties, type ReactNode } from 'react';

import { Box, type Theme, type SxProps } from '@mui/system';
import { observer } from 'mobx-react-lite';

interface ListProps<T> {
	items: T[];
	renderItem: (item: T, index: number, array: T[]) => ReactNode;
	gap?: CSSProperties['gap'];
	direction?: CSSProperties['flexDirection'];
	emptyNode?: ReactNode;
	containerStyles?: SxProps<Theme>;
}

const List = <T,>({
	items,
	renderItem,
	gap = 2,
	direction = 'column',
	emptyNode,
	containerStyles,
}: ListProps<T>) => {
	if (emptyNode && items.length === 0) {
		return <Box sx={{ ...containerStyles }}>{emptyNode}</Box>;
	}

	return (
		<Box
			hidden={items.length === 0}
			sx={{
				display: 'flex',
				flexDirection: direction,
				gap,
				...containerStyles,
			}}
		>
			{items.map(renderItem)}
		</Box>
	);
};

export default observer(List);
