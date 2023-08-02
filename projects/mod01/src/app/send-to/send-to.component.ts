import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sendTo',
  templateUrl: './send-to.component.html',
  styles: [
  ]
})
export class SendToComponent implements OnInit {
  @Input() email: string = "";
  @Output() sendEmail = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  sendTo(value: string) {
    this.email = value;
    this.sendEmail.emit(`${this.email};admin@uuu.com.tw`);
  }

}
