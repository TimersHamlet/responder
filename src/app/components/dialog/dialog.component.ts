import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { StoreService, TypeBehave, TypeTestResult } from 'src/app/services/store.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  option = '';

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public store: StoreService,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onClick() {
    if(this.data==='test'){
      const testParam: TypeTestResult = { option: this.option, result: '' };
      this.store.addTestResultItem(testParam);
    } 
    if(this.data==='behave'){
      const behaveparam: TypeBehave = { option: this.option, behave: '' };
      this.store.addBehaveItem(behaveparam);
    } 
  }

  onCancel() {
    this.dialogRef.close();
  }
}
