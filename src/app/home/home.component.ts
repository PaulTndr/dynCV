import { Component, OnInit } from '@angular/core';
import { GlobalService } from '.././global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data : any;
  //customMailTo : any;

  constructor(private globalService : GlobalService) { }

  ngOnInit() {
    this.data = this.globalService.data
    /*var textMail = " Site regroupant les CV de Paul TONDEREAU : ptondereau.perso.centrale-marseille.fr/dynamicCV"
    var newLine = "%0D%0A%0D%0A"
    this.customMailTo = "mailto:?body="+textMail+newLine*/
  }

}