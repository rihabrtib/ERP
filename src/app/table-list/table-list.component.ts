import { Component, OnInit } from '@angular/core';
import {  FinanceService, Achat } from './finance.service';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  achats:Achat[];
  

 
  submitted = false;
  success = false;
  
  messageForm = new FormGroup({
      
    firstName: new FormControl('', [Validators.required]),
    lastName:new FormControl('', [Validators.required]),
    role:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required]),
    numTel:new FormControl('', [Validators.required]),
    dateRec:new FormControl('', [Validators.required]),
    salaire:new FormControl('', [Validators.required]),
    adresse:new FormControl('', [Validators.required]),
    photo:new FormControl('', [Validators.required]),
    conge:new FormControl('', [Validators.required]),
    })
  constructor(private service: FinanceService) { }

 

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }
    
    this.success = true;
    this.service.addAchat(this.messageForm.value).subscribe(
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
    Delete(achat:Achat){
      this.service.deleteAchat(achat)
      .subscribe(data =>{
        this.achats=this.achats.filter(p=>p!==achat);
        alert("vous voulez supprimer ?");
      })
    }
    
    inSubmit(){
      this.ngOnInit();
    }

  ngOnInit() {
    
    this.service.getAchat().subscribe(data => {
      this.achats= data
    })
   
         
  }


  
}


