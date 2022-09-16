import { Component,OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public platform: Platform,private router: Router){}
  ngOnInit(): void {
    if(this.platform.IOS||this.platform.ANDROID){
      this.router.navigateByUrl('phone')
    }else{
      this.router.navigateByUrl('pc')
    }
  }
}
