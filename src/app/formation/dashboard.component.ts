import { Component, OnInit } from '@angular/core';
import { ServiceFormationService, Formation } from './service-formation.service';
import * as Chartist from 'chartist';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   formation:any;
  formations: Formation[];
  genre;
  
  submitted = false;
  success = false;

  messageForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    fileFormation: new FormControl('', [Validators.required]),
    
  })
  messageFormmodif = new FormGroup({
   
    name: new FormControl('', [Validators.required]),
    fileFormation: new FormControl('', [Validators.required]),
    type:new FormControl('', [Validators.required]),
   
    })
  constructor(private formBuilder: FormBuilder,
    private service: ServiceFormationService,
    private router: Router) {


    
  }

  redirect() {
    setTimeout(() => {
    }
      , 0)
  }


  ngOnInit() {

    this.service.getFormation().subscribe(data => {
      this.formations = data
    })

  }
  onSubmit() {
    this.submitted = true;

    if (this.messageFormmodif.invalid) {
      return;
    }

    this.success = true;
    this.service.addFormation(this.messageFormmodif.value).subscribe(
      data => {
        if (data) {

        }


      },
      err => {
        console.log("error sending data")
      },
      () => {
        alert("Confirmez?")
        console.log("data sent")
      }



    )

  }
  Delete(formation) {
    this.service.deleteFormation(formation)
      .subscribe(data => {
        this.formations = this.formations.filter(p=>p!==formation);
        alert(" voulez vous supprimer ?");
      })
      this.ngOnInit();
  }
 

  Edit(id){
    this.service.getFormationId(id).subscribe((res:any)=>{
      console.log("edit fn",id)
      this.genre=res;
      this.messageForm= new FormGroup({
        name: new FormControl(this.genre.name, [Validators.required]),
        fileFormation:new FormControl(this.genre.fileFormation, [Validators.required]),
        type:new FormControl(this.genre.type, [Validators.required]),
      })
      this.formation=res;
    })
  }

  Actualise(id){      
    this.service.updateFormation(id,this.messageForm.value).subscribe((res:any)=>{
      
      console.log(this.messageForm.value)
      alert("modifer");
      this.ngOnInit();
      
      
    })
 
 
 
  }


  inSubmit() {

    this.ngOnInit();
  }






}
