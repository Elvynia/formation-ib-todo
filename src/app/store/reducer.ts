import { createReducer, on } from '@ngrx/store';
import * as TODO  from './action';

export let idCount = 0;

const todoReducer = createReducer([{ id: 999, content: 'SUPER TEST'}],
  on(TODO.CreateTodo, (todoState, action) => [
    ...todoState,
    {
        id: idCount++,
        content: action.content
    }
  ]),
  on(TODO.DeleteTodo, (todoState, action) => {
    let newTodos = todoState.slice();
    let index = newTodos.findIndex((todo) => todo.id === action.id);
    if (index >= 0) {
      newTodos.splice(index, 1);
    }
    return newTodos;
  })
);

export function reducer(state, action) {
    return todoReducer(state, action);
}