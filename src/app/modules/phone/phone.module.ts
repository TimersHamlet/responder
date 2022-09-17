import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhoneRootComponent } from './components/phone-root.component';
import { PhoneRoutingModule } from './phone-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MainPhoneComponent } from './components/main/main.component';
import { TitleComponent } from 'src/app/components/title/title.component';

@NgModule({
  declarations: [PhoneRootComponent, MainPhoneComponent,TitleComponent],
  imports: [
    PhoneRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [],
})
export class PhoneModule {}
