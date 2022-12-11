import { makeAutoObservable } from 'mobx';

import type TodoStore from 'store/sub-stores/TodoStore';
import { ETodoStatus, type ETodoImportance, type ITodo } from 'types/todo';

class Todo implements ITodo {
	store: TodoStore;

	id: string;
	name: string;
	description?: string;
	importance: ETodoImportance;
	status: ETodoStatus;
	deleteAfterComplete: boolean;

	constructor(store: TodoStore, todo: ITodo) {
		makeAutoObservable(this);
		this.store = store;
		this.id = todo.id;
		this.name = todo.name;
		this.description = todo.description;
		this.importance = todo.importance;
		this.status = ETodoStatus.ACTIVE;
		this.deleteAfterComplete = todo.deleteAfterComplete;
	}

	get isCompleted() {
		return this.status === ETodoStatus.COMPLETED;
	}

	get isActive() {
		return this.status === ETodoStatus.ACTIVE;
	}

	complete = () => {
		if (this.deleteAfterComplete) {
			this.remove();
			return;
		}

		this.status = ETodoStatus.COMPLETED;
		this.store.completeTodo(this);
	};

	activate = () => {
		this.status = ETodoStatus.ACTIVE;
		this.store.activateTodo(this);
	};

	remove = () => {
		this.store.removeTodo(this);
	};

	asJson = (): ITodo => {
		const { id, name, description, importance, status, deleteAfterComplete } =
			this;
		return {
			id,
			name,
			description,
			importance,
			status,
			deleteAfterComplete,
		};
	};
}

export default Todo;
