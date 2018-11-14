import { Component, OnInit, ViewChild } from '@angular/core';
import { ToniesService } from '../../../services/tonies.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tonie } from '../../../shared/interfaces/tonie';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { map, mergeMap, scan, throttleTime } from 'rxjs/operators';

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


  constructor(
    private _tonies: ToniesService) {
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this._tonies.getBatch(n)),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );
    this.infinite = batchMap.pipe(map(v => Object.values(v)));
   this._tonies.theEnd.subscribe(v => this.theEnd = v);
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
  //
  // allTonies$: Observable<any[]>;
  // constructor(
  //   private _tonies: ToniesService
  // ) {
  //   this.allTonies$ = this._tonies.getAllTonies();
  // }
  //
  ngOnInit() {

  }



}
