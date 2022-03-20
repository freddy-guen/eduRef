import {Component, Input, OnInit} from '@angular/core';
import {Etudiant} from "../../Model/etudiant.model";


@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})
export class ListeEtudiantComponent implements OnInit {

  @Input() listeEtudiants !: Etudiant[];


  constructor() { }

  ngOnInit(): void {

  }


}
