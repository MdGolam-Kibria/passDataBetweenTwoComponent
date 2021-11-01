import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passDataBetweenTwoComponent';
  message: string | undefined = "";


  //For received data from child
  childMessage: string | undefined;

  //This method call when child create a event then call this function
  receivedMessage(childSms: string | undefined) {
    this.childMessage = childSms
  }


  sendToChild(value: string) {//For Send a String
    this.message = value;
  }
}
