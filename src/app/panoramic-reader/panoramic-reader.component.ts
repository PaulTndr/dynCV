import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service'

@Component({
  selector: 'app-panoramic-reader',
  templateUrl: './panoramic-reader.component.html',
  styleUrls: ['./panoramic-reader.component.css']
})
export class PanoramicReaderComponent implements OnInit {

  data: any;

  constructor(private globalService : GlobalService) { }

  ngOnInit() {
    this.data=this.globalService.data
  }

}