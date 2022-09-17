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
  testResult = '';

  constructor(public store: StoreService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.studyContent = this.store.getStudyContent();
    this.homework = this.store.getHomework();
    this.testResultList = this.store.getTestResultList();
    if(this.testResultList.length!==0){
      this.selected = this.testResultList[0].option
      this.testResult = this.testResultList[0].result
    }
  }

  selectChange(): void {
    if (this.selected === 'add') {
      this.testResult = ''
      const dialogRef = this.dialog.open(DialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        this.selected = result;
        this.testResult = ''
      });
    } else {
      this.testResultList = this.store.getTestResultList();
      const currentIndex = this.testResultList.findIndex(
        (item) => item.option === this.selected
      );
      this.testResult = this.testResultList[currentIndex].result;
    }
  }
}
