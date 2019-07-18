import { NgModule } from '@angular/core';
import { NgxPmpCaptchaComponent } from './ngx-pmp-captcha.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [NgxPmpCaptchaComponent],
  exports: [NgxPmpCaptchaComponent]
})
export class NgxPmpCaptchaModule { }
