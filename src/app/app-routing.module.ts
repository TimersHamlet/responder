import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pc',
    loadChildren: () =>
      import('./modules/pc/pc.module').then((m) => m.PCModule),
  },
  {
    path: 'phone',
    loadChildren: () =>
      import('./modules/phone/phone.module').then((m) => m.PhoneModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
