import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { ToDoContainerComponent } from './to-do-container/to-do-container.component';
import { ToDoPresentationComponent } from './to-do-container/to-do-presentation/to-do-presentation.component';


@NgModule({
  declarations: [
    TodoComponent,
    ToDoContainerComponent,
    ToDoPresentationComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
