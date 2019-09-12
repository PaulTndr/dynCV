import { Component, OnInit,Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-exemple-personal',
  templateUrl: './exemple-personal.component.html',
  styleUrls: ['./exemple-personal.component.scss']
})
export class ExemplePersonalComponent implements OnInit {

  @Input() data:any;
  styleForBackground : SafeStyle;
  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() {
    setTimeout(()=>{this.styleForBackground =  this.sanitizer.bypassSecurityTrustStyle("width:606px")},0);
  }

}