import {EtudiantNiveauFormation} from "./etudiant-niveau-formation.model";

export interface Etudiant {

  code_etudiant : string;
  nom_etudiant : string;
  prenom_etudiant : string;
  autre_prenom_etudiant : string;
  infos : EtudiantNiveauFormation[];
}
