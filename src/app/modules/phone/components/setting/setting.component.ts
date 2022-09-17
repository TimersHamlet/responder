import { Component, OnInit } from '@angular/core';
import { StoreService, TypeTestResult } from 'src/app/services/store.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-setting-phone',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingPhoneComponent implements OnInit {
  selected = '';
  binding = '';
  studyContent = '';
  homework = '';
  testResultList: Array<TypeTestResult> = [];

  constructor(public store: StoreService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.studyContent = this.store.getStudyContent();
    this.homework = this.store.getHomework();
    this.testResultList = this.store.getTestResultList();
  }

  selectChange(): void {
    if (this.selected === 'add') {
      const dialogRef = this.dialog.open(DialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        this.selected=this.testResultList[0].option
      });
    }
  }
}
