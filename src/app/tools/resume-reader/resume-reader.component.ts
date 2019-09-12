import { Component, OnInit, Input} from '@angular/core';
import { GlobalService } from '../../global.service'
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import $ from 'jquery';

@Component({
  selector: 'app-resume-reader',
  templateUrl: './resume-reader.component.html',
  styleUrls: ['./resume-reader.component.scss']
})
export class ResumeReaderComponent implements OnInit {

  @Input() typeCV : String;
  isRH : boolean;
  isTech : boolean;
  isPersonal : boolean;
  data: any;
  templateSelected : any;
  listTemplateForSelected : any;

  isPopupShareOpen=false;
  linkGlobal:any;
  linkCurrent:any;

  zoomLevel : number;
  styleForZoom : SafeStyle;

  constructor(private globalService : GlobalService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.isRH = this.typeCV === "RH" ? true : false;
    this.isTech = this.typeCV === "TECH" ? true : false;
    this.isPersonal = this.typeCV === "PERSONAL" ? true : false;

    var idSelected = this.globalService.choiceTemplate[this.typeCV];
    this.listTemplateForSelected = this.globalService.listTemplate[this.typeCV];
    var theSelectedTemplate;
    this.listTemplateForSelected.forEach(function(template){
      if (template["id"]===idSelected){
        theSelectedTemplate = template;
      }
    })
    this.templateSelected = theSelectedTemplate;

    this.data = this.globalService.data;

    const heightPage = 1414;
    this.zoomLevel = (window.innerHeight*0.85)/heightPage;
    this.styleForZoom = this.sanitizer.bypassSecurityTrustStyle("transform: scale("+this.zoomLevel+"); transform-origin: top center;");

    this.linkCurrent = window.location;
    var listUrl = (""+window.location).split("/");
    this.linkGlobal=""
    for (var k=0; k<listUrl.length-1; k++){
       this.linkGlobal+=listUrl[k]+"/"

    };
  }

  ajustZoom(zoomUpdate : String){
    const heightPage = 1414;
    const widthPage = 1000;

    if (zoomUpdate==="adapt"){
      this.zoomLevel = (window.innerHeight*0.90)/heightPage;
      this.styleForZoom = this.sanitizer.bypassSecurityTrustStyle("transform: scale("+this.zoomLevel+"); transform-origin: top center;");

      $('#buttonZoomOut').removeClass("notAvailable")
      $('#buttonZoomIn').removeClass("notAvailable")
      return;
    }

    zoomUpdate === "in" ? this.zoomLevel+=0.1 : this.zoomLevel-=0.1;
    this.styleForZoom = this.sanitizer.bypassSecurityTrustStyle("transform: scale("+this.zoomLevel+"); transform-origin: top center;");
    //On gère les boutons pour éviter les abus d'affichage
    if (this.zoomLevel<=0.1){
      $('#buttonZoomOut').addClass("notAvailable")
    } else {
      $('#buttonZoomOut').removeClass("notAvailable")
    }

    if((this.zoomLevel+0.1)*widthPage>=(window.innerWidth*0.90)){
      $('#buttonZoomIn').addClass("notAvailable")
    } else {
      $('#buttonZoomIn').removeClass("notAvailable")
    }
  }

   openSharePopup(){
    this.isPopupShareOpen = !this.isPopupShareOpen
  }








  

  print(triggerElement): void
{
    const toShow = this.hideParentSiblings($('#print-section'));
    $(triggerElement).hide();

    window.print();

    for (const e of toShow)
    {
        e.show();
    }

    $(triggerElement).show();
}

hideParentSiblings(element): any[]
{
    let parent;
    const toShow = [];

    while ((parent = element.parent()).length)
    {
        const visible = parent.siblings().find(':visible');
        toShow.push(visible);
        visible.hide();
        element = parent;
    }

    return toShow;
}

}