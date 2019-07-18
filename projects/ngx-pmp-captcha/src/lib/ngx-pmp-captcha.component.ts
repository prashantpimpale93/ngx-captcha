import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-pmp-captcha',
  template: `
  <div id="container" [style.height.px]="height" [style.width.px]="width">
  <div id="captchaContainer">
    <div class="jack">{{randomText}}</div>
    <input class="fill-width" type="text" [(ngModel)]="enteredText" (ngModelChange)="onTextType()">
  </div>
</div>
  `,
  styles: [`#captchaContainer {
    text-align: center;
    vertical-align: middle;
    text-decoration: line-through;
    position: relative;
    margin: 0 auto;
    border: 2px solid black;
    font-size: 2em;
    padding: 20px;
    display: flex;
}

.jack {
    -webkit-transform: translate(0, 0) rotate(-24deg);
}

/* Show in default resolution screen*/
#container {
    width: 960px;
    position: relative;
    margin: 0 auto;
    line-height: 1.4em;
}

/* If in mobile screen with maximum width 479px. The iPhone screen resolution is 320x480 px (except iPhone4, 640x960) */
@media only screen and (max-width: 479px) {
    #container {
        width: 90%;
    }
}

.fill-width {
    flex: 1;
    overflow: hidden;
}`]
})
export class NgxPmpCaptchaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public randomText: string = "";
  public enteredText: string = "";

  @Input() width : string = "300";
  @Input() height : string = "300";

  @Output() onTextTyping: EventEmitter<any> = new EventEmitter(false);

  getRandomString() {
    let str = Math.random().toString(36).substring(9);
    console.log(Math.floor(Math.random() * (143 - 1) + 0) +""+ str);
    this.randomText = Math.floor(Math.random() * (143 - 1) + 0) +""+ str;
  }

  onTextType() {
    if (this.enteredText === this.randomText) {
      this.onTextTyping.next(true)
    }
    else {
      this.onTextTyping.next(false)
    }
  }

}
