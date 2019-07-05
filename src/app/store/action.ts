import { createAction, props } from '@ngrx/store';

export const CreateTodo = createAction('TODO_CREATE', props<{content: string}>());
export const DeleteTodo = createAction('TODO_DELETE', props<{ id: number }>());
export const UpdateTodo = createAction('TODO_UPDATE', props<{ id: number, content: string}>());