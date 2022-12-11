import TodoStore from './sub-stores/TodoStore';

class RootStore {
	todoStore = new TodoStore();
}

export default RootStore;
