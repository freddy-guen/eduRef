import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent } from './Component/home/home.component';
import { EtudiantManageComponent } from './Component/etudiant-manage/etudiant-manage.component';
import {ROUTING} from "./app.routing";
import { MainComponent } from './Component/main/main.component';
import { ListeEtudiantComponent } from './Component/liste-etudiant/liste-etudiant.component';
import { AddEtudiantComponent } from './Component/add-etudiant/add-etudiant.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FiltreEtudiantComponent } from './Component/filtre-etudiant/filtre-etudiant.component';
import { ConsultationEtudiantComponent } from './Component/consultation-etudiant/consultation-etudiant.component';
import { ItemEtudiantComponent } from './Component/item-etudiant/item-etudiant.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgxPaginationModule} from "ngx-pagination";
import { DetailEtudiantComponent } from './Component/detail-etudiant/detail-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EtudiantManageComponent,
    MainComponent,
    ListeEtudiantComponent,
    AddEtudiantComponent,
    FiltreEtudiantComponent,
    ConsultationEtudiantComponent,
    ItemEtudiantComponent,
    DetailEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
