import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() data: string | undefined;

  //Now For pass data child to parent
  toChildMessage: string = "";
  @Output() event = new EventEmitter<string | undefined>();

  constructor() {
  }

  ngOnInit(): void {
  }

  sendToParent(parentToChildMessage: string) {
    this.toChildMessage = parentToChildMessage;
    this.event.emit(this.toChildMessage)
  }
}
