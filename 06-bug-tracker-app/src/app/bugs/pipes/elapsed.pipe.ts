import { NgZone, Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'
import { Observable, interval, map } from 'rxjs';

@Pipe({
  name: 'elapsed'
})
export class ElapsedPipe implements PipeTransform {

  constructor(private ngZone : NgZone){

  }
  transform(data: Date): any {
    return new Observable<string>(observer => {
      this.ngZone.runOutsideAngular(() => {
        const interval$ = interval(1000).pipe(
          map(() => {
            return moment(data).fromNow()
          })
        );

        const subscription = interval$.subscribe(observer);

        return () => {
          subscription.unsubscribe();
        }
      });
    });
    
  }

}
