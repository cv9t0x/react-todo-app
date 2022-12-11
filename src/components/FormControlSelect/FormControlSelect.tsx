import { type ChangeEvent } from 'react';

import { TextField, MenuItem } from '@mui/material';

type TFormControlSelectOption<T> = {
	value: T;
	label: string;
};

interface FormControlSelectProps<T> {
	label: string;
	value: T;
	options: Array<TFormControlSelectOption<T>>;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	name?: string;
	error?: boolean;
	helperText?: string | boolean;
	fullWidth?: boolean;
}

const FormControlSelect = <T extends string | number>({
	label,
	value,
	options,
	onChange,
	name,
	error,
	helperText,
	fullWidth,
}: FormControlSelectProps<T>) => {
	return (
		<TextField
			select
			fullWidth={fullWidth}
			name={name}
			label={label}
			value={value}
			error={error}
			helperText={helperText}
			onChange={onChange}
		>
			{options.map(({ value, label }) => (
				<MenuItem key={value} value={value}>
					{label}
				</MenuItem>
			))}
		</TextField>
	);
};

export default FormControlSelect;
