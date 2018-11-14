import { Component, OnInit } from '@angular/core';
import { ToniesService } from '../../../services/tonies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-tonies',
  templateUrl: './my-tonies.component.html',
  styleUrls: ['./my-tonies.component.scss']
})
export class MyToniesComponent implements OnInit {

  myTonies: Observable<any>;
  constructor(
    private _tonies: ToniesService
  ) {
    this.myTonies = this._tonies.getMyTonies();
  }

  ngOnInit() {
  }

}
