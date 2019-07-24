import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { ServicePersonnelsService, Personnel } from './service-personnels.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  personnels: Personnel[];
 filesToUpload:Array<File>=[];
 imagesize = false;
 imageExt = false;
 imageSrc:any;
  submitted = false;
  success = false;

  messageForm = new FormGroup({

    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    numTel: new FormControl('', [Validators.required]),
    dateRec: new FormControl('', [Validators.required]),
    salaire: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),


  });

   


  messageFormm = new FormGroup({

    photo: new FormControl('', [Validators.required]),
  })
  constructor(private formBuilder: FormBuilder,
    private service: ServicePersonnelsService,
  ) {


  }

  onSubmit() {
    this.submitted = true;

    
   const file = new FormData();
   file.append('photo',this.filesToUpload[0])
    this.success = true;
    this.service.addPhoto(file).subscribe(
      data => {
        if (data) {
            this.service.addPersonnel(data,this.messageForm.value).subscribe(
              data => {
                if (data) {
                  console.log("form sent")
                }
              }
            )
          
        }
      },
      err => {
        console.log("error sending data")
      },
      () => {
        console.log("data sent")

      }


    )
  }
  Delete(personnel: Personnel) {
    this.service.deletePersonnel(personnel)
      .subscribe(data => {
        this.personnels = this.personnels.filter(p => p !== personnel);
        alert("vous voulez supprimer ?");
      })
  }

  inSubmit() {
    this.ngOnInit();
  }

  ngOnInit() {

    this.service.getPersonnel().subscribe(data => {
      this.personnels = data
    })


  }
  fileChangeEvent(fileInput: any) {

    if (fileInput.target.files && fileInput.target.files[0]) {
      if ((fileInput.target.files[0].size / 1000000.0) > 5) {
        this.imagesize = true;
      } else if (!['png', 'jpg', 'jpeg'].includes((fileInput.target.files[0].name.substr(fileInput.target.files[0].name.lastIndexOf('.') + 1)))) {
        this.imageExt = true;
      } else {
        this.imagesize = false;
        this.imageExt = false;
        this.filesToUpload = <Array<File>>fileInput.target.files;
        const reader = new FileReader();
        reader.readAsDataURL(fileInput.target.files[0]); // read file as data url
        reader.onload = (event: any) => { // called once readAsDataURL is completed
          this.imageSrc = event.target.result;
        };
      }



}
  }
}
  