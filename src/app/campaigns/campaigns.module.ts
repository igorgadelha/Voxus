import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';

import { ReactiveFormsModule } from '@angular/forms';

import { CampaignsRoutingModule }  from './campaigns-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2TelInputModule } from 'ng2-tel-input';

// import { NgxMaskModule } from 'ngx-mask';
import { TextMaskModule } from 'angular2-text-mask';

// export const options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [FormComponent],
  exports: [
    FormComponent,
    CampaignsRoutingModule
  ],
  imports: [
    CommonModule,
    CampaignsRoutingModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    BrowserAnimationsModule,
    // NgxMaskModule.forRoot(),
    TextMaskModule
  ]
})
export class CampaignsModule { }
