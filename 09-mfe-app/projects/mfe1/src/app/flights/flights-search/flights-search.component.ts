import {Component} from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

  constructor(private service: AuthLibService, private httpClient : HttpClient) {
    
   
    console.log('User Name', this.service.user);
  }

  onBtnGetDataClick() {
    this.httpClient.get('http://localhost:3500/bugs')
      .subscribe(data => console.table(data))
  }
}
