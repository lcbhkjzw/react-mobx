import { observable, computed } from "mobx";

type Todo = {
    completed: boolean;
    task: string;
    assignee: string | null;
}

export class TodoStore {
    @observable
    todos: Array<Todo> = [];

    @computed
    get completedTodosCount () {
        return this.todos.filter(
            todo => todo.completed === true
        ).length
    }
    @computed
    get report () {
        if (this.todos.length === 0){
            return "<none>"
        }
        return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }

    addTodo (task: string) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        })
    }
}

const todoStore = new TodoStore();

export default todoStore;