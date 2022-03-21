import {Component, Input, OnInit} from '@angular/core';
import {Etudiant} from "../../Model/etudiant.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})
export class ListeEtudiantComponent implements OnInit {

  @Input() listeEtudiants !: Etudiant[];

  page : number = 1;
  count : number = 0;
  tableSize : number = 2;
  tableSizes : number[] = [2, 3, 4, 5, 10];


  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {

  }

  onTableDatachange(event : any) : void {
    this.page = event;
  }

  onTableSizeChange(event : any) : void {
    this.tableSize = event.target.value;
    this.page = 1;
  }


  consulter(etudiant : Etudiant) {
    const link = ['etudiants', etudiant.code_etudiant, 'details'];
    this.router.navigate(link);
  }
}
