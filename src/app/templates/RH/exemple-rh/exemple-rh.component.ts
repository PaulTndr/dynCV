import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../../global.service'

@Component({
  selector: 'app-exemple-rh',
  templateUrl: './exemple-rh.component.html',
  styleUrls: ['./exemple-rh.component.scss']
})
export class ExempleRhComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit() {
  }

}