import { useCallback, useState, useMemo } from 'react';

import { Box, Button, Container, Grid } from '@mui/material';
import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';

import Modal from 'components/Modal';
import TodoFilter from 'components/TodoFilter';
import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';
import { gridSpacing } from 'constants/grid';
import { filterByName } from 'helpers/todo';
import useDebounce from 'hooks/useDebounce';
import useModal from 'hooks/useModal';
import useStore from 'hooks/useStore';
import { type ITodoCreate } from 'types/todo';

const Home = () => {
	const {
		todoStore: {
			todos,
			currentTodo,
			setCurrentTodo,
			addTodo,
			editTodo,
			clearStoreData,
			findTodo,
		},
	} = useStore();

	const [filterName, setFilterName] = useState('');

	const debouncedFilterName = useDebounce(filterName, 500);

	const { open, handleOpen, handleClose } = useModal({
		onClose() {
			setCurrentTodo(undefined);
		},
	});

	const handleTodoEdit = useCallback((id: string) => {
		const todo = findTodo(id);
		if (todo) {
			setCurrentTodo(todo);
			handleOpen();
		}
	}, []);

	const handleSubmit = useCallback(
		(data: ITodoCreate) => {
			if (currentTodo) {
				editTodo(currentTodo.id, data);
			} else {
				addTodo(data);
			}

			handleClose();
		},
		[currentTodo],
	);

	const handleFilterNameChange = (name: string) => {
		setFilterName(name);
	};

	const filteredTodos = useMemo(
		() => computed(() => todos.filter(filterByName(debouncedFilterName))),
		[todos, debouncedFilterName],
	).get();

	return (
		<>
			<Box sx={{ py: 4 }}>
				<Container maxWidth='sm'>
					<Grid container spacing={gridSpacing}>
						<Grid item xs={12}>
							<TodoFilter
								name={filterName}
								onNameChange={handleFilterNameChange}
							/>
						</Grid>
						<Grid container spacing={gridSpacing} item xs={12}>
							<Grid item>
								<Button onClick={handleOpen}>Добавить TODO</Button>
							</Grid>
							<Grid item>
								<Button
									color='error'
									variant='outlined'
									onClick={clearStoreData}
								>
									Очистить LocalStorage
								</Button>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<TodoList
								noResults={Boolean(debouncedFilterName)}
								todos={filteredTodos}
								onTodoEdit={handleTodoEdit}
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Modal
				title={currentTodo ? 'Редактирование TODO' : 'Добавление TODO'}
				open={open}
				onClose={handleClose}
			>
				<TodoForm todo={currentTodo} onSubmit={handleSubmit} />
			</Modal>
		</>
	);
};

export default observer(Home);
