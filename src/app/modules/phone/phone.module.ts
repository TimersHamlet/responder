import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhoneRootComponent } from './components/phone-root.component';
import { PhoneRoutingModule } from './phone-routing.module';

@NgModule({
  declarations: [PhoneRootComponent],
  imports: [PhoneRoutingModule,CommonModule],
  providers: [],
  bootstrap: [],
})
export class PhoneModule {}
