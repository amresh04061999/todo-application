import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { ToDoContainerComponent } from './to-do-container/to-do-container.component';

const routes: Routes = [
  { path: '', component: TodoComponent,
  children:[
    {
      path:'',
      pathMatch:'full',
      redirectTo:'todo',
    },
    {
      path:'todo',component:ToDoContainerComponent
    }
  ]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
