import { Component, OnInit } from '@angular/core';
import { ServiceService, User } from '../service.service';
import * as Chartist from 'chartist';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:User[];
  messageForm: FormGroup;
  submitted = false;
  success = false;
  

  constructor(private formBuilder: FormBuilder,
     private service: ServiceService,
     private router : Router,
     private userService: ServiceService) { 
    this.messageForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
      bd: ['', Validators.required]
    })
  }
  redirect(){
    setTimeout( ()=>{
      this.router.navigate(["login"])
    }
    
    , 1000)
  }


  inSubmit(){
    this.userService.getuser(this.users).subscribe(
      data => {
        if (data) {
          console.log("user exist")
        }
        else console.log('user not found')

      },
      err => {
        console.log("error sending data")

      },
      () => {
        console.log("data sent")

      }

    )
  }

  
  
  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }
    
    this.success = true;
    this.service.adduser(this.messageForm.value).subscribe(
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

  
  ngOnInit() {
    
         
  }
}
