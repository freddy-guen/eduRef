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

  linkAllAnnee = 'http://guen.tech:8080/referentiel-api-0.0.1-SNAPSHOT/api/v1/annees/liste';
  linkAllFormation = 'http://guen.tech:8080/referentiel-api-0.0.1-SNAPSHOT/api/v1/formations/liste';
  linkAllNiveau = 'http://guen.tech:8080/referentiel-api-0.0.1-SNAPSHOT/api/v1/niveaux/liste';

  endPointInscription = 'http://guen.tech:8080/referentiel-api-0.0.1-SNAPSHOT/api/v1/inscription/';

  constructor(
    private http : HttpClient
  ) { }

  getAllAnnees() : Observable<Annee[]> {
    return this.http.get<Annee[]>(this.linkAllAnnee);
  }

  getAllFormations() : Observable<Formation[]> {
    return this.http.get<Formation[]>(this.linkAllFormation);
  }

  getAllNiveaux() : Observable<Niveau[]> {
    return this.http.get<Niveau[]>(this.linkAllNiveau);
  }

  getAllEtudiants() : Observable<Etudiant[]> {
    const endPoint : string = '/etudiants/liste';
    return  this.http.get<Etudiant[]>(this.endPointInscription + endPoint);
  }

  getAllEtudiantsByAnnee(annee : number) : Observable<Etudiant[]> {
    const endPoint : string = '/etudiants/liste';
    return  this.http.get<Etudiant[]>(this.endPointInscription + annee + endPoint);
  }

  getAllEtudiantsByFormation(annee : number, formation : string, niveau : string) : Observable<Etudiant[]> {
    const part1 : string = '/etudiants?formation=';
    const part2 : string = '&niveau=';
    return  this.http.get<Etudiant[]>(this.endPointInscription + annee + part1 + formation + part2 + niveau);
  }

  getAllEtudiantsByNiveau(annee : number, niveau : string) : Observable<Etudiant[]> {
    const endpoint : string = '/etudiants/liste?niveau=';
    return  this.http.get<Etudiant[]>(this.endPointInscription + annee + endpoint + niveau);
  }

  getAllEtudiantsByMotCle(annee : number, motCle : string) : Observable<Etudiant[]> {
    const endpoint : string = '/etudiants/recherche?motCle=';
    return  this.http.get<Etudiant[]>(this.endPointInscription + annee + endpoint + motCle);
  }


}
