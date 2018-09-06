import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Cerveja} from '../model/cerveja';

@Component({
  selector: 'app-cerveja-list',
  templateUrl: './cerveja-list.component.html',
  styleUrls: ['./cerveja-list.component.css']
})
export class CervejaListComponent implements OnInit {
  public cervejas: Observable<any>;
  constructor(public db: AngularFirestore) { }

  ngOnInit() {
      this.cervejas = this.db
      .collection('produtos')
      .valueChanges();
  }
}
