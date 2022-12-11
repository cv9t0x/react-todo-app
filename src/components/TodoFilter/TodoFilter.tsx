import { type ChangeEvent } from 'react';

import { Grid, TextField } from '@mui/material';

import { gridSpacing } from 'constants/grid';

export interface ITodoFilterProps {
	name: string;
	onNameChange: (search: string) => void;
}

const TodoFilter = ({ name, onNameChange }: ITodoFilterProps) => {
	const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		onNameChange(event.target.value);
	};

	return (
		<Grid container spacing={gridSpacing}>
			<Grid item xs={12}>
				<TextField
					fullWidth
					value={name}
					onChange={handleNameChange}
					label='Поиск по названию'
					placeholder='Введите название TODO'
				/>
			</Grid>
		</Grid>
	);
};

export default TodoFilter;
