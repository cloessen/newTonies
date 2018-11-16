import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  resize$: Observable<any>;

  constructor() {
    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth), //Don't use mapTo!
        distinctUntilChanged(),
        startWith(window.innerWidth),
        // tap(width => this.sb.setWindowWidth(width)),
      );
    // this.resize$.subscribe(value => console.log(value));
  }

  public getScreenObserver() {
    return this.resize$;
  }
}
