import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreeterService {

  constructor() { }

  greet(name : string) : string {
    return `Hi, ${name}, Have a nice day!`
  }
}
