import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {

  @Output() newToDoCreated: EventEmitter<{ task: string, description: string }> = new EventEmitter<{ task: string, description: string }>();

  newToDoTask = '';
  newToDoDescription = '';

  addNewToDo(): void {
    if (this.newToDoTask.trim()) {
      this.newToDoCreated.emit({
        task: this.newToDoTask,
        description: this.newToDoDescription.trim(),
      });
    }
    this.newToDoTask = '';
    this.newToDoDescription = '';
  }

}
