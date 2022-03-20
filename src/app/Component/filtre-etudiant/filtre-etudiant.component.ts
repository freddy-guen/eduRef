import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, NgForm} from "@angular/forms";
import {EtudiantService} from "../../Service/etudiant.service";
import {Etudiant} from "../../Model/etudiant.model";
import {Annee} from "../../Model/annee.model";
import {Formation} from "../../Model/formation.model";
import {Niveau} from "../../Model/niveau.model";

@Component({
  selector: 'app-filtre-etudiant',
  templateUrl: './filtre-etudiant.component.html',
  styleUrls: ['./filtre-etudiant.component.css']
})
export class FiltreEtudiantComponent implements OnInit {

  //Réactive form pour déclencher l'initialisation de certains champs lorsque certaines valeurs changent par exemple
  reactiveForm = new FormGroup({
    filtreAnnee: new FormControl(),
    filtrePar: new FormControl(),
    filtreFormation: new FormControl(),
    filtreFormationClasse: new FormControl(),
    filtreClasse: new FormControl(),
    filtreNom: new FormControl(),
    boutonRechercher: new FormControl()
  });

  etudiants : Etudiant[] = [];
  annees : Annee[] = [];
  formations : Formation[] = [];
  niveaux : Niveau[] = [];
  filtres = ['Tous', 'Nom', 'Formation', 'Classe'];

  //Emetteur d'événement pour envoyer des données au composant parent (ici ConsultationEtudiantcomponent)
  @Output() sendRequestToData = new EventEmitter();

  //variables utilisées pour le binding
  anneeFilter !: number;
  firstFilter : string = 'Tous';  //filtrer par
  secondFilter : string = 'Toutes';  //formation
  thirdFilter !: string;  //classe
  fourthFilter !: string; //nom

  constructor(
    private etudiantService : EtudiantService
  ) { }

  ngOnInit(): void {
    //On récupère et initialise les années au chargement du composant
    this.etudiantService.getAllAnnees().subscribe(
      (years) => {
        this.annees = years;
      },
      (error) => {
        console.log('Erreur lors de la récupération des années : ', error);
      }
    );
    //On récupère et initialise les formations au chargement du composant
    this.etudiantService.getAllFormations().subscribe(
      (formations) => {
        this.formations = formations;
      },
      (error) => {
        console.log('Erreur lors de la récupération des formations : ', error);
      }
    );
    //On récupère et initialise les formations au chargement du composant
    this.etudiantService.getAllNiveaux().subscribe(
      (niveaux) => {
        this.niveaux = niveaux;
      },
      (error) => {
        console.log('Erreur lors de la récupération des niveaux : ', error);
      }
    );

    //On réinitialise ces champs lorsque la valeur du filtre de base change
    this.reactiveForm.get("filtrePar")?.valueChanges.subscribe(selectedValue => {
      //On réinitialise ces champs
      this.secondFilter = '';
      this.thirdFilter = '';
      this.fourthFilter = '';
    })
  }

  getAllEtudiants() {
    if(this.anneeFilter){
      switch (this.firstFilter) {
        case "Tous" :
          return this.getAllEtudiantsByAnnee(this.anneeFilter);
        case "Formation" :
          return this.getAllEtudiantsByFormation(this.anneeFilter, this.secondFilter, this.thirdFilter);
        case "Classe" :
          return this.getAllEtudiantsByNiveau(this.anneeFilter, this.thirdFilter);
        case "Nom" :
          return this.getAllEtudiantsByMotCle(this.anneeFilter, this.fourthFilter);
      }
    }
  }

  getAllEtudiantsByAnnee(annee : number){
    this.etudiantService.getAllEtudiantsByAnnee(annee).subscribe(
      (etudiants) => {
        this.etudiants = etudiants;
        //Envoie des données au composant père
        this.sendRequestToData.emit(
          this.etudiants
        );
      },
      (error) => {
        alert(`Problème d'accès à  l'API`);
        console.log(error);
      }
    );
  }

  getAllEtudiantsByFormation(annee : number, formation : string, niveau : string){
    this.etudiantService.getAllEtudiantsByFormation(annee, formation, niveau).subscribe(
      (etudiants) => {
        this.etudiants = etudiants;
        //Envoie des données au composant père
        this.sendRequestToData.emit(
          this.etudiants
        );
      },
      (error) => {
        alert(`Problème d'accès à  l'API`);
        console.log(error);
      }
    );
  }

  getAllEtudiantsByNiveau(annee : number, niveau : string){
    this.etudiantService.getAllEtudiantsByNiveau(annee, niveau).subscribe(
      (etudiants) => {
        this.etudiants = etudiants;
        //Envoie des données au composant père
        this.sendRequestToData.emit(
          this.etudiants
        );
      },
      (error) => {
        alert(`Problème d'accès à  l'API`);
        console.log(error);
      }
    );
  }

  getAllEtudiantsByMotCle(annee : number, motCle : string){
    this.etudiantService.getAllEtudiantsByMotCle(annee, motCle).subscribe(
      (etudiants) => {
        this.etudiants = etudiants;
        //Envoie des données au composant père
        this.sendRequestToData.emit(
          this.etudiants
        );
      },
      (error) => {
        alert(`Problème d'accès à  l'API`);
        console.log(error);
      }
    );
  }


  getAll(){
    this.etudiantService.getAllEtudiants().subscribe(
      (etudiants) => {
        this.etudiants = etudiants;
        //Envoie des données au composant père
        this.sendRequestToData.emit(
          this.etudiants
        );
      },
      (error) => {
        alert(`Problème d'accès à  l'API`);
        console.log(error);
      }
    );
  }

}
