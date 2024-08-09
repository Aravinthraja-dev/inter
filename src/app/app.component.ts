import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./parent/parent.component";
import { TestChildComponent } from './test-child/test-child.component';
import { TaskWorkComponent } from './task-work/task-work.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, TestChildComponent, TaskWorkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inter';
  deleviryMessage!: string;
  fruits: string[] = ['Apple', 'Orange', 'Mange','Pineapple'];

  receiveMessage($event: string){
    this.deleviryMessage = $event;
  }
}
