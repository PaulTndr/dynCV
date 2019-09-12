import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import $ from 'jquery';

@Component({
  selector: 'app-exemple-tech',
  templateUrl: './exemple-tech.component.html',
  styleUrls: ['./exemple-tech.component.scss']
})
export class ExempleTechComponent implements OnInit {

  @Input() data:any;

  //ViewChild du graphe message par tranche horaire
  @ViewChild('graphTechno') graphTechno: ElementRef;
  graphTechnoChart = [];
  listLabelTechno=[];
  listValueTechno=[];
  listBackgroundTechno=[];

  @ViewChild('graphTechno2') graphTechno2: ElementRef;
  graphTechnoChart2 = [];
  listValueTechnoLiked=[];


  constructor(private elementRef : ElementRef) { }

  ngOnInit() {
    var listTechno = this.data["skills"]["technical"]
    for (var k=0; k<listTechno.length; k++){
      var techno = listTechno[k];
      this.listLabelTechno.push(techno["name"]);
      this.listValueTechno.push(techno["level"]);
      this.listValueTechnoLiked.push(techno["levelFav"]);
    }
    setTimeout(() => {
      console.log($(".oneTechnoPicture").css("opacity",1))
    },1000)
    
    this.listBackgroundTechno=["#951d36","#d6524e","#db5f55","#f18f79","#f6dac4","lightgray"];

    var maxNumberTl = Math.max(this.data['formationsTech'].length, this.data['experiencePro'].length,this.data['projetPerso'].length)
    setTimeout(()=>{
      for (var k=0; k<maxNumberTl;k++){
        this.printElement(k)
      }
    },0);
  }

  ngAfterViewInit() {

     // Chart sur les heures des messages

        this.graphTechnoChart = new Chart
        (this.graphTechno.nativeElement.getContext('2d'), {  
            plugins : {
              datalabels : {
                display : true,
              }
            },
          type: 'doughnut',
          data : {
            datasets: [{
                data: this.listValueTechno,
                backgroundColor: this.listBackgroundTechno,
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: this.listLabelTechno
          },
          options: {
            layout:{
            },
            responsive: false,
            maintainAspectRatio: false,
            plugins : {
              datalabels : {
                display : false,
              }
            },
            legend: {
              position: 'bottom',
              display: false,
              fullWidth:false,
              labels:{
                fontSize:12,
              }
            }
          }
        });

        this.graphTechnoChart2 = new Chart
        (this.graphTechno2.nativeElement.getContext('2d'), {  
            plugins : {
              datalabels : {
                display : true,
              }
            },
          type: 'bar',
          data : {
            datasets: [{
                data: this.listValueTechnoLiked,
                backgroundColor: this.listBackgroundTechno,
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: this.listLabelTechno
          },
          options: {
            responsive: false,
            maintainAspectRatio: false,
            plugins : {
              datalabels : {
                display : false,
              }
            },
            legend: {
              position: 'bottom',
              display: false,
            },
            scales: {
              yAxes: [{
                display:false,
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
          /*options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins : {
              datalabels : {
                display : false,
              }
            },
            scales: {
              xAxes: [{
                gridLines : {
                  color : '#1A1837',
                  lineWidth : 0.1,
                },
                ticks :{
                  fontColor :'#1A1837',
                },
                scaleLabel : {
                  labelString : 'Tranches horaires',
                  display : false,
                }
              }],
              yAxes: [{
                gridLines : {
                  color : '#1A1837',
                  lineWidth : 0.1,
                },
                ticks : {
                  fontColor :'#1A1837',
                },
                scaleLabel : {
                  labelString : '% des messages',
                  display : true,
                }
              }]
            },
            title: {
          display: false,
          text: "Répartition en % des messages par tranche horaire",
          fontSize : 16,
          fontColor : '#1A1837',
          fontStyle : 'bold'

          },
          legend: {
            position: 'bottom',
            display: true,
            fullWidth: true,
          labels: {
            fontSize: 11

          }
            },
            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                    return Math.round(tooltipItem.yLabel * 10) / 10+'%';
                    
                }
              },
            enabled: true, 
            }
            }
          }*/
        
  }

  printElement(k : number){
    setTimeout(()=>{
      $("#IdForma"+k).css("opacity",1)
      $("#IdExp"+k).css("opacity",1)
      $("#IdProjet"+k).css("opacity",1)
    }, k*300)
    
  }

}