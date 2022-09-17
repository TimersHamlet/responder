import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-main-phone',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainPhoneComponent implements OnInit {
  selected = 'option2';
  value = '';
  name = '';
  studyContent = ''
  homework = ''

  constructor(public store: StoreService) {}

  ngOnInit(): void {
    this.studyContent = this.store.getStudyContent()
    this.homework = this.store.getHomework()
  }

  inputFun() {
    this.store.setName(this.name);
  }
}
