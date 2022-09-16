import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneRootComponent } from './components/phone-root.component';

const routes: Routes = [
  {
    path: '',
    component:PhoneRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneRoutingModule { }