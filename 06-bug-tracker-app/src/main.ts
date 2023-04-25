import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import * as moment from 'moment'
console.log(moment('10-Apr-2023').fromNow())

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
