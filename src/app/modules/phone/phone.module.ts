import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhoneRootComponent } from './components/phone-root.component';
import { PhoneRoutingModule } from './phone-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MainPhoneComponent } from './components/main/main.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { SettingPhoneComponent } from './components/setting/setting.component';
import { FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';

@NgModule({
  declarations: [
    PhoneRootComponent,
    MainPhoneComponent,
    TitleComponent,
    SettingPhoneComponent,
  ],
  imports: [
    PhoneRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    TextFieldModule,
  ],
  providers: [],
  bootstrap: [],
})
export class PhoneModule {}
