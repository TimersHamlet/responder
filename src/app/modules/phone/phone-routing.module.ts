import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPhoneComponent } from './components/main/main.component';
import { PhoneRootComponent } from './components/phone-root.component';
import { SettingPhoneComponent } from './components/setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component:PhoneRootComponent,
    children:[
      {
        path:'main',
        component:MainPhoneComponent
      },
      {
        path:'setting',
        component:SettingPhoneComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneRoutingModule { }