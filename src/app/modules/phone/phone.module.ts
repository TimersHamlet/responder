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
import {MatIconModule} from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@NgModule({
  declarations: [
    PhoneRootComponent,
    MainPhoneComponent,
    TitleComponent,
    SettingPhoneComponent,
    DialogComponent
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
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [],
})
export class PhoneModule {}
