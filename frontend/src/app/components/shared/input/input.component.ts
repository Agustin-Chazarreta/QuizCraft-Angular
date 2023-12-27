import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-shared-input',
  template: `<label>
    <mat-form-field class="example-full-width">
        <mat-label>{{labelInput}}</mat-label>
        <input matInput #message maxlength="256" placeholder={{placeholder}}>
        <mat-hint align="end">{{message.value.length}} / 256</mat-hint>
    </mat-form-field>
  </label>`,
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() labelInput!: string;
  @Input() placeholder!: string;

}
