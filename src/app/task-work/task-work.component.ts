import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-work',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './task-work.component.html',
  styleUrl: './task-work.component.css'
})
export class TaskWorkComponent {

  visibleForms: string[] = [];
  activeForm: string | null = null;

  openForm(form: string) {
    if (!this.visibleForms.includes(form)) {
      this.visibleForms.push(form);
    }
    this.activeForm = form;
  }

  closeForm(form: string, event: Event) {
    event.stopPropagation();
    this.visibleForms = this.visibleForms.filter(f => f !== form);
    if (this.activeForm === form) {
      this.activeForm = this.visibleForms.length ? this.visibleForms[0] : null;
    }
  }

  setActiveForm(form: string) {
    this.activeForm = form;
  }
}
