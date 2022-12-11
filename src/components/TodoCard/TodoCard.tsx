import {
	Unarchive as UnarchiveIcon,
	Delete as DeleteIcon,
	Done as DoneIcon,
} from '@mui/icons-material';
import {
	Button,
	Card,
	CardContent,
	Typography,
	CardActions,
} from '@mui/material';
import { observer } from 'mobx-react-lite';

import { TodoImportanceList } from 'constants/todo';
import type Todo from 'models/Todo';
import { type TColorVariant } from 'types/color';
import { ETodoImportance } from 'types/todo';

import {
	TodoCardImportance,
	TodoCardImportanceIcon,
	TodoCardImportanceTitle,
} from './TodoCard.styled';

interface TodoCardProps {
	todo: Todo;
	onEdit: (id: string) => void;
}

const getColorVariant = (importance: ETodoImportance): TColorVariant => {
	switch (importance) {
		case ETodoImportance.HIGH_IMPORTANCE:
			return 'error';
		case ETodoImportance.MIDDLE_IMPORTANCE:
			return 'warning';
		default:
			return 'success';
	}
};

const TodoCard = ({ todo, onEdit }: TodoCardProps) => {
	const {
		id,
		importance,
		name,
		description,
		isCompleted,
		isActive,
		activate,
		complete,
		remove,
		deleteAfterComplete,
	} = todo;

	const handleEdit = () => {
		onEdit(id);
	};

	const { label: importanceLabel } = TodoImportanceList.find(
		({ value }) => value === importance,
	)!;

	return (
		<Card>
			<CardContent>
				<TodoCardImportance>
					<TodoCardImportanceIcon color={getColorVariant(importance)} />
					<TodoCardImportanceTitle colorVariant={getColorVariant(importance)}>
						{importanceLabel}
					</TodoCardImportanceTitle>
				</TodoCardImportance>
				<Typography sx={{ mb: 1 }}>{name}</Typography>
				{description && (
					<Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
						{description}
					</Typography>
				)}
				{isActive && (
					<Typography
						color='primary.main'
						variant='body2'
						onClick={handleEdit}
						sx={{ cursor: 'pointer' }}
					>
						Редактировать
					</Typography>
				)}
			</CardContent>
			<CardActions sx={{ gap: 1 }}>
				{isCompleted ? (
					<Button startIcon={<UnarchiveIcon />} onClick={activate}>
						Активировать
					</Button>
				) : (
					<Button color='success' startIcon={<DoneIcon />} onClick={complete}>
						Выполнить
					</Button>
				)}
				{!deleteAfterComplete && (
					<Button
						variant='outlined'
						color='error'
						startIcon={<DeleteIcon />}
						onClick={remove}
					>
						Удалить
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default observer(TodoCard);
