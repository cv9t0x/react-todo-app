import type Todo from 'models/Todo';

const filterByName = (name: string) => (todo: Todo) => {
	return !name || todo.name.toLowerCase().startsWith(name.toLowerCase());
};

export default filterByName;
