import { Injectable } from '@angular/core';
import { GreeterService } from './greeter.service';

@Injectable({
  providedIn: 'root'
})
export class GeeterV2Service extends GreeterService{

  constructor() { 
    super()
  }

  override greet(name: string): string {
    return `Hi, ${name}, Have a good day!`
  }
}
