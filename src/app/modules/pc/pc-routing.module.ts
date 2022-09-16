import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PCRootComponent } from './components/pc-root.component';

const routes: Routes = [
  {
    path: '',
    component:PCRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcRoutingModule { }
