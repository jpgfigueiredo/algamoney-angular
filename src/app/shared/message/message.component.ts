import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="p-message p-message-error"> {{ text }} </div>
  `,
  styles: [`
    .p-message-error {
      color: white;
      margin: 0;
      margin-top: 4px;
      padding: 3px;
      border-radius: 5px;
      text-align: center;
    }
  `]
})
export class MessageComponent {

  @Input() error: string = '';
  @Input() control?: FormControl;
  @Input() text: string = '';

  temErro(): boolean {
    return this.control ? this.control.hasError(this.error) && this.control.dirty : true;
  }

}
