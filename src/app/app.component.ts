import { Component } from '@angular/core';
import {MyService} from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public message: string;

  constructor(myService: MyService) {
    this.message = myService.getMessage();
  }
}


