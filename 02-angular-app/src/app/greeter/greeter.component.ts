import { Component } from '@angular/core';
import { GreeterService } from '../services/greeter.service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent {

  userName: string = '';
  message: string = '';
  // greeterService : GreeterService = new GreeterService()

  constructor(private greeterService : GreeterService){

  }
  onBtnGreetClick() {
    this.message = this.greeterService.greet(this.userName)
  }
}
