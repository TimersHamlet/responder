import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-setting-phone',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingPhoneComponent implements OnInit {
  selected = 'option2';
  binding ='';
  studyContent = ''

  constructor(public store:StoreService){}

  ngOnInit(): void {
    this.studyContent = this.store.getStudyContent()
  }
}
