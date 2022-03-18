import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from 'rxjs';
import {Etudiant} from "../Model/etudiant.model";
import {Annee} from "../Model/annee.model";
import {Formation} from "../Model/formation.model";
import {Niveau} from "../Model/niveau.model";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  linkAllEtudiant = 'http://guen.tech:8080/referentiel-api-0.0.1-SNAPSHOT/api/v1/inscription/liste';
  linkAllAnnee = 'http://guen.tech:8080/referentiel-api-0.0.1-SNAPSHOT/api/v1/annees/liste';
  linkAllFormation = 'http://guen.tech:8080/referentiel-api-0.0.1-SNAPSHOT/api/v1/formations/liste';
  linkAllNiveau = 'http://guen.tech:8080/referentiel-api-0.0.1-SNAPSHOT/api/v1/niveaux/liste';

  constructor(
    private http : HttpClient
  ) { }

  getAllEtudiants() : Observable<Etudiant[]> {
      return  this.http.get<Etudiant[]>(this.linkAllEtudiant);
  }

  getAllAnnees() : Observable<Annee[]> {
    return this.http.get<Annee[]>(this.linkAllAnnee);
  }

  getAllFormations() : Observable<Formation[]> {
    return this.http.get<Formation[]>(this.linkAllFormation);
  }

  getAllNiveaux() : Observable<Niveau[]> {
    return this.http.get<Niveau[]>(this.linkAllNiveau);
  }



}
