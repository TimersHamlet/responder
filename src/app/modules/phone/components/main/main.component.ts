import { Component, OnInit } from '@angular/core';
import { StoreService, TypeTestResult } from 'src/app/services/store.service';

@Component({
  selector: 'app-main-phone',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainPhoneComponent implements OnInit {
  selected = '';
  value = '';
  name = '';
  studyContent = '';
  homework = '';
  testResultList: Array<TypeTestResult> = [];
  testResult = '';

  constructor(public store: StoreService) {}

  ngOnInit(): void {
    this.studyContent = this.store.getStudyContent();
    this.homework = this.store.getHomework();
    this.testResultList = this.store.getTestResultList();
    if(this.testResultList.length!==0){
      this.selected = this.testResultList[0].option
      this.testResult = this.testResultList[0].result
    }
  }

  inputFun() {
    this.store.setName(this.name);
  }

  selectChange(): void {
    this.testResultList = this.store.getTestResultList();
    const currentIndex = this.testResultList.findIndex(
      (item) => item.option === this.selected
    );
    this.testResult = this.testResultList[currentIndex].result;
  }
}
