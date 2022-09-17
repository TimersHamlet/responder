import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { StoreService, TypeTestResult } from 'src/app/services/store.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  option = '';

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public store: StoreService
  ) {}

  onClick() {
    const param: TypeTestResult = { option: this.option, result: '' };
    this.store.addTestResultItem(param);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
