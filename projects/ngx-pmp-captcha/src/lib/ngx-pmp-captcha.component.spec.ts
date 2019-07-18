import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPmpCaptchaComponent } from './ngx-pmp-captcha.component';

describe('NgxPmpCaptchaComponent', () => {
  let component: NgxPmpCaptchaComponent;
  let fixture: ComponentFixture<NgxPmpCaptchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPmpCaptchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPmpCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
