import { makeAutoObservable } from 'mobx';
import { clearPersistedStore, makePersistable } from 'mobx-persist-store';
import * as uuid from 'uuid';

import { localStoragePrefix } from 'constants/localStorage';
import Todo from 'models/Todo';
import { ETodoStatus, type ITodo, type ITodoCreate } from 'types/todo';

class TodoStore {
	name = 'todoStore';

	currentTodo: Todo | undefined = undefined;

	todos: Todo[] = [];

	constructor() {
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		const store = this;
		makeAutoObservable(this);
		makePersistable(this, {
			name: `${localStoragePrefix}/${this.name}`,
			properties: [
				{
					key: 'todos',
					serialize(todos) {
						return todos.map(todo => todo.asJson());
					},
					deserialize(todos: ITodo[]) {
						return todos.map(todo => new Todo(store, todo));
					},
				},
			],
			storage: window.localStorage,
		});
	}

	clearStoreData = async () => {
		await clearPersistedStore(this);
	};

	findTodo = (id: string) => {
		return this.todos.find(todo => todo.id === id);
	};

	setCurrentTodo = (currentTodo: Todo | undefined) => {
		this.currentTodo = currentTodo;
	};

	addTodo = (data: ITodoCreate) => {
		const todo = new Todo(this, {
			id: uuid.v4(),
			status: ETodoStatus.ACTIVE,
			...data,
		});
		this.todos.unshift(todo);
	};

	editTodo = (id: string, data: ITodoCreate) => {
		const todo = this.findTodo(id);
		if (todo) {
			Object.assign(todo, data);
		}
	};

	removeTodo = (todo: Todo) => {
		this.todos.splice(this.todos.indexOf(todo), 1);
	};

	completeTodo = (todo: Todo) => {
		this.removeTodo(todo);
		this.todos.push(todo);
	};

	activateTodo = (todo: Todo) => {
		this.removeTodo(todo);
		this.todos.unshift(todo);
	};
}

export default TodoStore;
