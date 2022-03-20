import {Component, OnInit} from '@angular/core';
import {Etudiant} from "../../Model/etudiant.model";

@Component({
  selector: 'app-consultation-etudiant',
  templateUrl: './consultation-etudiant.component.html',
  styleUrls: ['./consultation-etudiant.component.css']
})
export class ConsultationEtudiantComponent implements OnInit {

  etudiants : Etudiant[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  getEtudiants(etudiants : Etudiant[]) {
    this.etudiants = etudiants;
  }
}
