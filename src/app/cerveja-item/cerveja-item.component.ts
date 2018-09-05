import {Component, Input, OnInit} from '@angular/core';
import {Cerveja} from '../model/cerveja';

@Component({
  selector: 'app-cerveja-item',
  templateUrl: './cerveja-item.component.html',
  styleUrls: ['./cerveja-item.component.css']
})
export class CervejaItemComponent {
  @Input() public cerveja: Cerveja;

  constructor() { }

}
