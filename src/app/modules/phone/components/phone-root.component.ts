import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-root',
  templateUrl: './phone-root.component.html',
  styleUrls: ['./phone-root.component.scss'],
})
export class PhoneRootComponent implements OnInit {

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

  currentID = 'main';

  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.router.navigateByUrl(`phone/${this.currentID}`)
  }

  tabClick = (tabId:string) => {
    this.currentID = tabId
    this.router.navigateByUrl(`phone/${this.currentID}`)
  };
}
