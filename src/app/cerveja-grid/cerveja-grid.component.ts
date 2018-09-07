import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cerveja-grid',
  templateUrl: './cerveja-grid.component.html',
  styleUrls: ['./cerveja-grid.component.css']
})
export class CervejaGridComponent implements OnInit {
  public cervejas: Observable<any>;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { cols: 1}
        ];
      }

      return [
        { cols: 3},
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver
            , public db: AngularFirestore) {

  }

  ngOnInit() {
    this.cervejas = this.db
      .collection('produtos')
      .valueChanges();
  }

}
