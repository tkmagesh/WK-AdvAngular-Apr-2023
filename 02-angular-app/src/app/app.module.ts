import { Inject, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { GreeterService } from './services/greeter.service';
import { GeeterV2Service } from './services/geeter-v2.service';
import { APP_NAME_TOKEN } from './shared/app.service';

//useFactory
/* 
function getGSFactory(version : number){
  return function greeterServiceFactory() {
    return version === 1 ? new GreeterService() : new GeeterV2Service()
  }
}


const greeterFactory = getGSFactory(2) 
*/



//useValue
const greeterService = {
  greet(name : string) : string {
    return `Hi John Doe, I dont care!`
  }
}



@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // GreeterService
    // { provide  : GreeterService, useClass : GreeterService },
    // { provide: GreeterService, useClass: GeeterV2Service },
    // { provide: GreeterService, useFactory: greeterServiceFactory },
    { provide: GreeterService, useValue: greeterService },
    { provide: APP_NAME_TOKEN , useValue : 'DI Demo'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
