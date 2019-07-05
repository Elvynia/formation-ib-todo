import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from './store/state';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Array<any>;
  
  constructor(private store: Store<TodoState>) { }

  ngOnInit(): void {
    this.store.pipe(
      pluck('todos')
    ).subscribe((todos) => this.todos = todos);
  }
  
}
