import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./Component/home/home.component";
import {EtudiantManageComponent} from "./Component/etudiant-manage/etudiant-manage.component";
import {AppComponent} from "./app.component";
import {MainComponent} from "./Component/main/main.component";
import {ListeEtudiantComponent} from "./Component/liste-etudiant/liste-etudiant.component";
import {AddEtudiantComponent} from "./Component/add-etudiant/add-etudiant.component";
import {ConsultationEtudiantComponent} from "./Component/consultation-etudiant/consultation-etudiant.component";


const APP_ROUTING : Routes = [
  {path : '', component : MainComponent},
  {path : 'etudiant', component : EtudiantManageComponent, children : [
      {path : 'consulter', component : ConsultationEtudiantComponent},
      {path : 'ajout', component : AddEtudiantComponent},
  ]},
];

//On lui demande d'exporter ces routes sous forme de module quand va utiliser dans notre app module
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
