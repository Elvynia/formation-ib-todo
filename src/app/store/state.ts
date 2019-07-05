import { createSelector } from '@ngrx/store';

export class TodoState {
    todos: Array<any>
}

export const todosSelector = (state: TodoState) => state.todos;
export const noRafTodos = createSelector(
    todosSelector,
    (todos) => todos.filter((todo) => todo.content !== 'RAF')
);