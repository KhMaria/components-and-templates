import {Component} from '@angular/core';
import {ToDoModel} from '../models/toDo.model';
import {toDosList} from '../mock/toDo.mock';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  title = 'ToDos list';
  toDos: ToDoModel[] = toDosList;

  onDone(id: number): void {
    this.toDos = this.toDos.filter((item) => {
      return item.id !== id;
    });
  }

  addNewToDo(newToDo: { task: string, description: string }): void {
    this.toDos.push({
      id: this.toDos.length + 1,
      task: newToDo.task,
      description: newToDo.description,
    });
  }
}
