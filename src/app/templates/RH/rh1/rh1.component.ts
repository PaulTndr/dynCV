import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../../global.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import $ from 'jquery';

@Component({
  selector: 'app-rh1',
  templateUrl: './rh1.component.html',
  styleUrls: ['./rh1.component.scss']
})
export class Rh1Component implements OnInit {

  @Input() data:any;
  skillsLines = [];
  styleForH1 : SafeStyle;

  styleTextInBubble : SafeStyle;

  styleSeparator : SafeStyle;

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() {
    var newLine=[]
    for (var k =0; k<this.data['skills']['technical'].length; k++){
      if (newLine.length<3){
        newLine.push(this.data['skills']['technical'][k])
      } else{
        this.skillsLines.push(newLine);
        newLine=[]
        newLine.push(this.data['skills']['technical'][k])
      }

      if (k==this.data['skills']['technical'].length-1){
        this.skillsLines.push(newLine);
      }
    }

    setTimeout(()=>{$("#iconNaissance").css("margin-left", "-120px")},0);
    setTimeout(()=>{$("#iconAdresse").css("margin-left", "-120px")},0);
    setTimeout(()=>{$("#iconTel").css("margin-left", "-120px")},0);
    setTimeout(()=>{$("#iconMail").css("margin-left", "-120px")},0);
    setTimeout(()=>{$("#iconIn").css("margin-left", "-120px")},0);

    setTimeout(()=>{
      $("#rondN1").css("width", "130px")
      $("#rondN1").css("height", "130px")
      $("#rondN2").css("width", "100px")
      $("#rondN2").css("height", "100px")
      $("#rondN3").css("width", "70px")
      $("#rondN3").css("height", "70px")
    },0);
    setTimeout(()=>{this.styleTextInBubble=this.sanitizer.bypassSecurityTrustStyle("opacity:1")},2000);

    var maxNumberTl = Math.max(this.data['formations'].length, this.data['experiences'].length)
    setTimeout(()=>{
      this.styleForH1 = this.sanitizer.bypassSecurityTrustStyle("margin-left:35%");
    },0);
    setTimeout(()=>{
      for (var k=0; k<maxNumberTl;k++){
        this.printElement(k)
      }
    },1000);

    setTimeout(()=>{
      this.styleSeparator = this.sanitizer.bypassSecurityTrustStyle("width:70%;");
    },0);
    
  }

  printElement(k : number){
    setTimeout(()=>{
      $("#IdFormDate"+k).css("color","black")
      $("#IdFormTl"+k).css("opacity",1)
      $("#IdFormInfo"+k).css("color","black")
      $("#IdExpDate"+k).css("color","black")
      $("#IdExpTl"+k).css("opacity",1)
      $("#IdExpInfo"+k).css("color","black")
    }, k*500)
    
  }
}