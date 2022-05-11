import { Component, Injectable, OnInit } from '@angular/core';
import { fichier } from '../../model/fichier.module';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'component-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

@Injectable()
export class CreateComponent implements OnInit {

  fichier = new fichier()

   fichierArray : fichier[]=[];
  

  constructor(public datepipe: DatePipe,private http: HttpClient ) { }

    recto_cin!:File;
    verso_cin!:File  ;


    getRecto(event: any){
      this.recto_cin= <File>event.target.files[0];
    }
    getVerso(event: any){
      this.verso_cin= <File>event.target.files[0];
    }
/*name
surname
phone
enail
cin_recto ( hadi file )
cin_verso ( hadi file )
cin
birthdate ( YYYY-MM-DD )
address
patenteNumber
commerceRegisterImm 
*/
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
    
    this.http.post('http://localhost:8080/api/account/agent/register',fd)
    .subscribe((result)=>{
          console.warn("result",result);

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
