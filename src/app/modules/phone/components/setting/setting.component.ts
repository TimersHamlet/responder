import { Component, OnInit } from '@angular/core';
import { StoreService, TypeBehave, TypeTestResult } from 'src/app/services/store.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-setting-phone',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingPhoneComponent implements OnInit {
  testSelected = '';
  behaveSelected = ''
  binding = '';
  studyContent = '';
  homework = '';
  testResultList: Array<TypeTestResult> = [];
  testResult = '';
  behaveList: Array<TypeBehave> = [];
  behave = '';

  constructor(public store: StoreService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.studyContent = this.store.getStudyContent();
    this.homework = this.store.getHomework();
    this.testResultList = this.store.getTestResultList();
    this.behaveList = this.store.getBehaveList();
    if(this.testResultList.length!==0){
      this.testSelected = this.testResultList[0].option
      this.testResult = this.testResultList[0].result
    }
    if(this.behaveList.length!==0){
      this.behaveSelected = this.behaveList[0].option
      this.behave = this.behaveList[0].behave
    }
  }

  testSelectChange(): void {
    if (this.testSelected === 'add') {
      this.testResult = ''
      const dialogRef = this.dialog.open(DialogComponent,{data:'test'});
      dialogRef.afterClosed().subscribe((result) => {
        this.testSelected = result;
        this.testResult = ''
      });
    } else {
      this.testResultList = this.store.getTestResultList();
      const currentIndex = this.testResultList.findIndex(
        (item) => item.option === this.testSelected
      );
      this.testResult = this.testResultList[currentIndex].result;
    }
  }

  behaveSelectChange(): void {
    if (this.behaveSelected === 'add') {
      this.behave = ''
      const dialogRef = this.dialog.open(DialogComponent,{data:'behave'});
      dialogRef.afterClosed().subscribe((result) => {
        this.behaveSelected = result;
        this.behave = ''
      });
    } else {
      this.behaveList = this.store.getBehaveList();
      const currentIndex = this.behaveList.findIndex(
        (item) => item.option === this.behaveSelected
      );
      this.behave = this.behaveList[currentIndex].behave;
    }
  }
}
