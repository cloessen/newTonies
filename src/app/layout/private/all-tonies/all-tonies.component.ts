import { Component, OnInit, ViewChild } from '@angular/core';
import { ToniesService } from '../../../services/tonies.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { map, mergeMap, scan, throttleTime } from 'rxjs/operators';
import { ScreenService } from '../../../services/screen.service';

@Component({
  selector: 'app-all-tonies',
  templateUrl: './all-tonies.component.html',
  styleUrls: ['./all-tonies.component.scss']
})
export class AllToniesComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;
  // theEnd$: Observable<boolean>;
  theEnd = false;
  screenSize$: Observable<any>;
  displayHeight: string;


  constructor(
    private _tonies: ToniesService,
    private _screen: ScreenService
  ) {
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this._tonies.getBatch(n)),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );
    this.infinite = batchMap.pipe(map(v => Object.values(v)));
    this._tonies.theEnd.subscribe(v => this.theEnd = v);
    this.screenSize$ = this._screen.getScreenObserver();
    this.screenSize$.subscribe(value => this.displayHeight = value <= 767 ? '350px;' : '130px;');
  }

  nextBatch(e, offset) {
    if (this.theEnd) {
      return;
    }

    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    if (end === total) {
      this.offset.next(offset);
    }
  }

  trackByIdx(i) {
    return i;
  }

  ngOnInit() {

  }
  handleAddClick(tonie) {
    console.log(tonie);
  }


}
