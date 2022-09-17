import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-root',
  templateUrl: './phone-root.component.html',
  styleUrls: ['./phone-root.component.scss'],
})
export class PhoneRootComponent {
  tabList = [
    {
      tabId: 'main',
      tabName: '主页',
      iconUrl: '../../../../assets/icons/cat.png',
    },
    {
      tabId: 'setting',
      tabName: '设置',
      iconUrl: '../../../../assets/icons/cat.png',
    },
  ];

  activedUrl = '../../../../assets/icons/cat-actived.png';

  currentID = '';

  tabClick = (tabId:string) => {
    this.currentID = tabId
  };
}
