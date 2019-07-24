import { Component, OnInit } from '@angular/core';
import { Condidat } from './service-condidat.service';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms'
import {  ServiceCondidatService } from './service-condidat.service';

import { ServiceFormationService, Formation } from '../formation/service-formation.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  condidats:Condidat[];
  condidat:any;
  formations:Formation[]
  messageFormModif: FormGroup;
  submitted = false;
  success = false;
  
  messageForm = new FormGroup({
   
  firstName: new FormControl('', [Validators.required]),
  lastName:new FormControl('', [Validators.required]),
  email:new FormControl('', [Validators.required]),
  payer:new FormControl('', [Validators.required]),
  adresse:new FormControl('', [Validators.required]),
  numTel:new FormControl('', [Validators.required]),
  cv:new FormControl('', [Validators.required]),
  formation:new FormControl(null, [Validators.required]),
  })
  constructor(private formBuilder: FormBuilder,
     private service:  ServiceCondidatService, private formationservice:  ServiceFormationService,
     ) {}
     ngOnInit() {
    
      this.service.getCondidat().subscribe(data => {
        this.condidats= data
      })
      this.Submit();
    }

    Submit(){
      this.formationservice. getFormation().subscribe(data => {
        this.formations= data
      })
    }
  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }
    
    this.success = true;
    let formation =this.messageForm.value.formation;
    let niv = this.messageForm.value;
    delete niv['formation'];
    console.log(niv);
    console.log(formation);
    this.service.addCondidat(niv,formation).subscribe(
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
    Delete(condidat:Condidat){
      this.service.deleteCondidat(condidat)
      .subscribe(data =>{
        this.condidats=this.condidats.filter(p=>p!==condidat);
        alert("vous voulez supprimer ?");
      })
    }
    onSelectFile($event){
      
    }
    
    inSubmit(){
      this.ngOnInit();
    }

 
   
         
  }


  


