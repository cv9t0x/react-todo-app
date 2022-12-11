import { Add as AddIcon, Edit as EditIcon } from '@mui/icons-material';
import {
	Grid,
	TextField,
	Button,
	FormControlLabel,
	Checkbox,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import FormControlSelect from 'components/FormControlSelect';
import { gridSpacing } from 'constants/grid';
import { TodoImportanceList } from 'constants/todo';
import type Todo from 'models/Todo';
import { ETodoImportance, type ITodoCreate } from 'types/todo';

interface TodoFormProps {
	todo?: Todo;
	onSubmit: (data: ITodoCreate) => void;
}

const TodoForm = ({ todo, onSubmit }: TodoFormProps) => {
	const { values, errors, touched, handleChange, handleSubmit, resetForm } =
		useFormik({
			enableReinitialize: true,
			validationSchema: Yup.object({
				name: Yup.string().required('Поле обязательно для заполнения'),
				description: Yup.string().test(
					'maxLength',
					'Должно быть меньше 255 символов',
					value => (value ?? '').length < 255,
				),
				importance: Yup.string(),
				deleteAfterComplete: Yup.boolean(),
			}),
			initialValues: {
				name: todo?.name ?? '',
				description: todo?.description ?? '',
				importance: todo?.importance ?? ETodoImportance.LOW_IMPORTANCE,
				deleteAfterComplete: todo?.deleteAfterComplete ?? false,
			},
			onSubmit(values: ITodoCreate) {
				onSubmit(values);
				resetForm();
			},
		});

	return (
		<form onSubmit={handleSubmit}>
			<Grid container spacing={gridSpacing}>
				<Grid item xs={12}>
					<TextField
						fullWidth
						name='name'
						label='Название TODO'
						value={values.name}
						error={touched.name && Boolean(errors.name)}
						placeholder='Введите название TODO'
						helperText={touched.name && Boolean(errors.name) && errors.name}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						name='description'
						label='Описание TODO'
						value={values.description}
						error={touched.description && Boolean(errors.description)}
						placeholder='Введите описание TODO'
						helperText={
							touched.description &&
							Boolean(errors.description) &&
							errors.description
						}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlSelect
						fullWidth
						name='importance'
						label='Степень важности TODO'
						value={values.importance}
						options={TodoImportanceList}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						name='deleteAfterComplete'
						label='Удалить после выполнения'
						control={<Checkbox />}
						value={values.deleteAfterComplete}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button type='submit' startIcon={todo ? <EditIcon /> : <AddIcon />}>
						{todo ? 'Сохранить' : 'Добавить'}
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default TodoForm;
