import { Component, OnInit } from '@angular/core';
import { fichier } from '../../model/fichier.module';

@Component({
  selector: 'component-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  fichier = new fichier()

   fichierArray : fichier[]=[];

  constructor() { }


  ngOnInit(){
    this.fichierArray.push(this.fichier);
  }

  addNewFichier(){
    if(this.fichierArray.length>=2){
      return;
    }
    console.log("hello");
    this.fichier = new fichier();
    this.fichierArray.push(this.fichier);

  }

}
