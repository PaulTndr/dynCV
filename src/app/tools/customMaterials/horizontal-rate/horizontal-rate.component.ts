import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { InViewportMetadata } from 'ng-in-viewport';

@Component({
  selector: 'app-horizontal-rate',
  templateUrl: './horizontal-rate.component.html',
  styleUrls: ['./horizontal-rate.component.scss']
})
export class HorizontalRateComponent implements OnInit {

  @Input() level:number;
  @Input() rondColor:any;
  @Input() backgroundColor:any;
  styleRond1 : SafeStyle;
  styleRond2 : SafeStyle;
  styleRond3 : SafeStyle;
  styleRond4 : SafeStyle;
  styleRond5 : SafeStyle;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.styleRond1 = this.sanitizer.bypassSecurityTrustStyle("background-color:"+this.backgroundColor);
    this.styleRond2 = this.sanitizer.bypassSecurityTrustStyle("background-color:"+this.backgroundColor);
    this.styleRond3 = this.sanitizer.bypassSecurityTrustStyle("background-color:"+this.backgroundColor);
    this.styleRond4 = this.sanitizer.bypassSecurityTrustStyle("background-color:"+this.backgroundColor);
    this.styleRond5 = this.sanitizer.bypassSecurityTrustStyle("background-color:"+this.backgroundColor);
  }

  ngAfterViewInit(){
  }

  onInViewportChange(inViewport: boolean) {
    if (inViewport){
      var ajustedLevel = Math.floor(this.level/2)
      if (ajustedLevel>=5){
        setTimeout(()=>{
          this.styleRond5 = this.sanitizer.bypassSecurityTrustStyle("background-color:"+this.rondColor);
        }, 2000)
      }
      if (ajustedLevel>=4){
        setTimeout(()=>{
          this.styleRond4 = this.sanitizer.bypassSecurityTrustStyle("background-color:"+this.rondColor);
        }, 1600)
      }
      if (ajustedLevel>=3){
        setTimeout(()=>{
          this.styleRond3 = this.sanitizer.bypassSecurityTrustStyle("background-color:"+this.rondColor);
        }, 1200)
      }
      if (ajustedLevel>=2){
        setTimeout(()=>{
          this.styleRond2 = this.sanitizer.bypassSecurityTrustStyle("background-color:"+this.rondColor);
        }, 800)
      }
      if (ajustedLevel>=1){
        setTimeout(()=>{
          this.styleRond1 = this.sanitizer.bypassSecurityTrustStyle("background-color:"+this.rondColor);
        }, 400)
      }
    } 
  }

}