import { Component, OnInit } from '@angular/core';
import { StoreService, TypeBehave, TypeTestResult } from 'src/app/services/store.service';

@Component({
  selector: 'app-main-phone',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainPhoneComponent implements OnInit {
  testSelected = '';
  behaveSelected = ''
  value = '';
  name = '';
  studyContent = '';
  homework = '';
  testResultList: Array<TypeTestResult> = [];
  testResult = '';
  behaveList: Array<TypeBehave> = [];
  behave = '';

  constructor(public store: StoreService) {}

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

  inputFun() {
    this.store.setName(this.name);
  }

  testSelectChange(): void {
    this.testResultList = this.store.getTestResultList();
    const currentIndex = this.testResultList.findIndex(
      (item) => item.option === this.testSelected
    );
    this.testResult = this.testResultList[currentIndex].result;
  }

  behaveSelectChange(): void {
    this.behaveList = this.store.getBehaveList();
    const currentIndex = this.behaveList.findIndex(
      (item) => item.option === this.behaveSelected
    );
    this.behave = this.behaveList[currentIndex].behave;
  }
}
