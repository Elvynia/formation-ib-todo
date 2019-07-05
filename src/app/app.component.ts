import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoState, noRafTodos } from './store/state';
import { pluck } from 'rxjs/operators';
import { CreateTodo, DeleteTodo } from './store/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Array<any>;
  filteredTodos: Array<any>;
  
  constructor(private store: Store<TodoState>) { }

  ngOnInit(): void {
    // Toutes les tâches.
    this.store.pipe(
      pluck('todos')
    ).subscribe((todos) => this.todos = todos);
    // Tâches non 'RAF'.
    this.store.pipe(
      select(noRafTodos)
    ).subscribe((todos) => this.filteredTodos = todos);
  }

  createTodo() {
    let content = prompt('Veuillez saisir le contenu de la tâche à créer : ', 'RAF');
    if (content) {
      this.store.dispatch(CreateTodo({ content }));
    }
  }

  deleteTodo(id: number) {
    this.store.dispatch(DeleteTodo({ id }));
  }
  
}
