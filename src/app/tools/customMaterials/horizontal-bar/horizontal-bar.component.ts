import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { InViewportMetadata } from 'ng-in-viewport';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.css']
})
export class HorizontalBarComponent implements OnInit, AfterViewInit {

  @Input() level:number;
  @Input() color:any;
  @Input() backgroundColor:any;
  styleInline : SafeStyle;
  styleInlineBk : SafeStyle;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log(this.color)
  }

  ngAfterViewInit(){
  }

  onInViewportChange(inViewport: boolean) {
    if (inViewport){
      var ajustedLevel = this.level*2
      this.color = this.color === "" ? "black" : this.color;
      this.backgroundColor = this.backgroundColor === "" ? "black" : this.backgroundColor;
      this.styleInlineBk = this.sanitizer.bypassSecurityTrustStyle("background-color:"+this.backgroundColor);
      this.styleInline = this.sanitizer.bypassSecurityTrustStyle("background-color:"+this.color+";width:"+ajustedLevel+"0px");
    } 
  }
}