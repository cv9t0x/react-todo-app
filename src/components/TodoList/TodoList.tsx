import { Typography, Box } from '@mui/material';
import { observer } from 'mobx-react-lite';

import List from 'components/List';
import TodoCard from 'components/TodoCard';
import { gridSpacing } from 'constants/grid';
import type Todo from 'models/Todo';

interface TodoListProps {
	todos: Todo[];
	onTodoEdit: (id: string) => void;
	noResults?: boolean;
}

const TodoList = ({ todos, onTodoEdit, noResults }: TodoListProps) => {
	return (
		<List
			gap={gridSpacing}
			items={todos}
			renderItem={todo => (
				<TodoCard key={todo.id} todo={todo} onEdit={onTodoEdit} />
			)}
			emptyNode={
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '30vh',
					}}
				>
					<Typography variant='h6'>
						{noResults
							? 'Нет TODO по вашему запросу'
							: 'Пока что не добавлено ни одного TODO'}{' '}
						&#128542;
					</Typography>
				</Box>
			}
		/>
	);
};

export default observer(TodoList);
