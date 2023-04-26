import { Component, Inject } from '@angular/core';
import { APP_NAME_TOKEN } from './shared/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(APP_NAME_TOKEN) public appName : string){

  }
}
