import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-button-shared',
  template: `<ng-container [ngSwitch]="buttonType">
  <ng-container *ngSwitchCase="'mat-raised-button'">
    <button mat-raised-button  [ngClass]="'mat-' + color">{{label}}</button>
  </ng-container>
  <ng-container *ngSwitchCase="'mat-button'">
    <button mat-button  [ngClass]=" 'mat-' + color">{{label}}</button>
  </ng-container>
  <ng-container *ngSwitchCase="'mat-stroked-button'">
    <button mat-stroked-button  [ngClass]="'mat-' + color">{{label}}</button>
  </ng-container>
  <ng-container *ngSwitchDefault>
    <button  [ngClass]="'mat-' + color">{{label}}</button>
  </ng-container>
</ng-container>
`,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label!: string
  @Input() color!: string
  @Input() buttonType!: string
  @Input() customColor!: string

  buttonColorClass() {
    if (this.customColor) {
      return this.customColor;
    }
    return 'mat-' + this.color;
  }
}
