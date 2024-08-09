import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test-child',
  standalone: true,
  imports: [NgFor],
  templateUrl: './test-child.component.html',
  styleUrl: './test-child.component.css'
})
export class TestChildComponent {

  @Input()items!: string[];
  @Output() message = new EventEmitter<string>()

  sendMessage(){
    this.message.emit('Hello message to you');
  }
}
