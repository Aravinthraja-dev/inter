import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {

  @Output() onAddItem = new EventEmitter<string>();
  newItem = '';

  addItem(){
    this.onAddItem.emit(this.newItem);
    this.newItem = '';
  }
}
