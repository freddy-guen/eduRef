import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./Component/home/home.component";
import {EtudiantManageComponent} from "./Component/etudiant-manage/etudiant-manage.component";
import {AppComponent} from "./app.component";
import {MainComponent} from "./Component/main/main.component";
import {ListeEtudiantComponent} from "./Component/liste-etudiant/liste-etudiant.component";
import {AddEtudiantComponent} from "./Component/add-etudiant/add-etudiant.component";
import {ConsultationEtudiantComponent} from "./Component/consultation-etudiant/consultation-etudiant.component";
import {DetailEtudiantComponent} from "./Component/detail-etudiant/detail-etudiant.component";


/*const APP_ROUTING : Routes = [
  {path : '', component : MainComponent},
  {path : 'etudiants', component : EtudiantManageComponent, children : [
      {path : 'ajout', component : AddEtudiantComponent},
      {
        path : 'consultation', component : ConsultationEtudiantComponent, children : [
          {path : ':code', component : DetailEtudiantComponent},
        ]
      },
  ]},
];*/

const APP_ROUTING : Routes = [
  {path : '', component : MainComponent},
  {path : 'etudiants', component : EtudiantManageComponent, children : [
      {path : 'consultation', component : ConsultationEtudiantComponent},
      {path : 'ajout', component : AddEtudiantComponent},
      {path : ':code/details', component : DetailEtudiantComponent},
    ]},
];

//On lui demande d'exporter ces routes sous forme de module quand va utiliser dans notre app module
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
