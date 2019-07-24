import { Component, OnInit } from '@angular/core';
import {  CongeService, Conge } from './conge.service';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms'
import {  ServicePersonnelsService, Personnel } from '../notifications/service-personnels.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  conges:Conge[];
  personnels:Personnel[]

 
  submitted = false;
  success = false;
  
  messageForm = new FormGroup({
    dateDepart: new FormControl('', [Validators.required]),
    dateFin:new FormControl('', [Validators.required]),
    personne: new FormControl(null, [Validators.required]),
   
    })
  constructor( private service:  CongeService, private personelservice: ServicePersonnelsService) { }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }
    
    this.success = true;
    let personne =this.messageForm.value.personne;
    let niv = this.messageForm.value;
    delete niv['personne'];
    console.log(niv);
    console.log(personne);
    this.service.addConge(niv,personne).subscribe(
      data=>{
       if(data) {
        
       }
      
      
      },
      err => {
        console.log("error sending data")
      },
      ()=>{
        console.log("data sent")
      }


    
      )
    }

    Submit(){
      this.personelservice. getPersonnel().subscribe(data => {
        this.personnels= data
      })
    }
    Delete(conge:Conge){
      this.service.deleteConge(conge)
      .subscribe(data =>{
        this.conges=this.conges.filter(p=>p!==conge);
        alert("vous voulez supprimer ?");
      })
    }
    
    inSubmit(){
      this.ngOnInit();
    }

  ngOnInit() {
    
    this.service.getConge().subscribe(data => {
      this.conges= data
    })
   this.Submit();
         
  }


  
}

