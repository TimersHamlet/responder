import { Injectable } from '@angular/core';

export interface TypeTestResult {
  option: string;
  result: string;
}

export interface TypeBehave {
  option: string;
  behave: string;
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  name = '';
  studyContent = '';
  homework = '';
  testResultList: Array<TypeTestResult> = [];
  behaveList: Array<TypeBehave> = [];
  constructor() {}

  setName(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  setStudyContent(content: string) {
    this.studyContent = content;
  }
  getStudyContent() {
    return this.studyContent;
  }

  setHomework(homework: string) {
    this.homework = homework;
  }
  getHomework() {
    return this.homework;
  }

  addTestResultItem(testResultItem: TypeTestResult) {
    this.testResultList.push(testResultItem)
  }
  updateTestResultItem(testResultItem:TypeTestResult) {
    this.testResultList.map((item)=>{
      if(item.option===testResultItem.option){
        item.result = testResultItem.result
      }
    })
  }
  deleteTestResultItem(option:string) {
    const currentIndex =this.testResultList.findIndex(item=>item.option===option)
    if(currentIndex!==-1){
      this.testResultList.splice(currentIndex,1)
    }
  }
  getTestResultList(){
    return this.testResultList
  }
}
