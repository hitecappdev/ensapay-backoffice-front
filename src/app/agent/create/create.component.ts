import { Component, Injectable, OnInit } from '@angular/core';
import { fichier } from '../../auth/model/fichier.module';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'component-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

@Injectable()
export class CreateComponent implements OnInit {

  fichier = new fichier()

   fichierArray : fichier[]=[];


  constructor(
          public datepipe: DatePipe,
          private http: HttpClient,
          private alertService: AlertService,
          private router:Router,
          private route:ActivatedRoute ) { }

    recto_cin!:File;
    verso_cin!:File  ;


    getRecto(event: any){
      this.recto_cin= <File>event.target.files[0];
    }
    getVerso(event: any){
      this.verso_cin= <File>event.target.files[0];
    }
    

  onSubmit(agent: any)
  {
    let date = this.datepipe.transform(agent.birthdate, 'yyyy-MM-dd');

    const fd = new FormData();
    fd.append("name",agent.name);
    fd.append("surname",agent.surname);
    fd.append("phone",agent.phone);
    fd.append("email",agent.email);
    fd.append("cin_recto",this.recto_cin,this.recto_cin.name )
    fd.append("cin_verso",this.verso_cin,this.verso_cin.name )
    fd.append("cin",agent.cin);
    fd.append("birthdate",agent.birthdate);
    fd.append("address",agent.address);
    fd.append("patenteNumber",agent.patenteNumber);
    fd.append("commerceRegisterImm",agent.commerceRegisterImm);

    
     console.warn(fd);
    
    this.http.post('https://ensa-pay-2022.herokuapp.com/api/account/agent/register',fd)
    .subscribe({
        
        error: (e: any) => {
          this.alertService.error("Le serveur ne repond pas !");
        },

        complete: () => {
          this.alertService.success("L'agent a été bien créé !", { keepAfterRouteChange: true });
          this.router.navigate(['./'], { relativeTo: this.route });
        
        }

    })
  }

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
