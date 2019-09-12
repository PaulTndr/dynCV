import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RhContentReaderComponent } from './rh-content-reader/rh-content-reader.component';
import { TechContentReaderComponent } from './tech-content-reader/tech-content-reader.component';
import { PersonalContentReaderComponent } from './personal-content-reader/personal-content-reader.component';
import { ResumeReaderComponent } from './tools/resume-reader/resume-reader.component';
import { HomeComponent } from './home/home.component';

import { ExempleRhComponent } from './templates/RH/exemple-rh/exemple-rh.component';

import { HorizontalBarComponent } from './tools/customMaterials/horizontal-bar/horizontal-bar.component'
import { GlobalService } from './global.service';
import { ExempleTechComponent } from './templates/TECH/exemple-tech/exemple-tech.component';
import { ExemplePersonalComponent } from './templates/PERSONAL/exemple-personal/exemple-personal.component';
import { Rh1Component } from './templates/RH/rh1/rh1.component';
import { HorizontalRateComponent } from './tools/customMaterials/horizontal-rate/horizontal-rate.component';
import { PanoramicReaderComponent } from './panoramic-reader/panoramic-reader.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rhContent', component: RhContentReaderComponent },
  { path: 'techContent', component: TechContentReaderComponent },
  { path: 'personalContent', component: PersonalContentReaderComponent },
  { path: 'panoramic', component: PanoramicReaderComponent },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, PDFExportModule, RouterModule.forRoot(appRoutes), InViewportModule,MatSelectModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, RhContentReaderComponent, TechContentReaderComponent, PersonalContentReaderComponent, ResumeReaderComponent, HomeComponent,ExempleRhComponent,HorizontalBarComponent, ExempleTechComponent, ExemplePersonalComponent, Rh1Component, HorizontalRateComponent, PanoramicReaderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalService]
})
export class AppModule { }
