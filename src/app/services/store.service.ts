import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  name = '';
  studyContent = '';
  homework = '';
  testResultList: Array<{ option: string; result: string }> = [];
  behaveList: Array<{ option: string; behave: string }> = [];
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
}
