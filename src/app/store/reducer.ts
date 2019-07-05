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
  ])
);

export function reducer(state, action) {
    return todoReducer(state, action);
}