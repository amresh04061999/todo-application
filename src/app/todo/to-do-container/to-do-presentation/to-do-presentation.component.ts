import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-presentation',
  templateUrl: './to-do-presentation.component.html',
  styleUrls: ['./to-do-presentation.component.scss']
})
export class ToDoPresentationComponent {
  all = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  active = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  resolved = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  close = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
 public  isInputVisible:boolean;
 constructor(){
this.isInputVisible=false
 }
  drop(event: CdkDragDrop<string[]>) {
    console.log();
   
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  public openInputBox(){

  }


  toggleInputVisibility() {
    this.isInputVisible = !this.isInputVisible;
  }
}
