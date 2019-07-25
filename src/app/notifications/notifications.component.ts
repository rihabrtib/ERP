import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { ServicePersonnelsService, Personnel } from './service-personnels.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  genre;
  personnel: any;
  personnels: Personnel[];
  filesToUpload: Array<File> = [];
  imagesize = false;
  imageExt = false;
  imageSrc: any;
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

  messageFormmodif = new FormGroup({

    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    numTel: new FormControl('', [Validators.required]),
    dateRec: new FormControl('', [Validators.required]),
    salaire: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),


  });









  //messageFormm = new FormGroup({

  //  photo: new FormControl('', [Validators.required]),
  //})
  constructor(private formBuilder: FormBuilder,
    private service: ServicePersonnelsService,
  ) {


  }

  onSubmit() {
    this.submitted = true;


    const file = new FormData();
    file.append('photo', this.filesToUpload[0])
    this.success = true;
    this.service.addPhoto(file).subscribe(
      data => {
        if (data) {
          this.service.addPersonnel(data, this.messageForm.value).subscribe(
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
        console.log("data sent");
        alert("Confirmez?");

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

  Edit(id) {
    this.service.getPersonnelId(id).subscribe((res: any) => {
      console.log("edit fn", id)
      this.genre = res;
      this.messageFormmodif = new FormGroup({
        firstName: new FormControl(this.genre.firstName, [Validators.required]),
        lastName: new FormControl(this.genre.lastName, [Validators.required]),
        role: new FormControl(this.genre.role, [Validators.required]),
        email: new FormControl(this.genre.email, [Validators.required]),
        numTel: new FormControl(this.genre.numTel, [Validators.required]),
        dateRec: new FormControl(this.genre.dateRec, [Validators.required]),
        salaire: new FormControl(this.genre.salaire, [Validators.required]),
        adresse: new FormControl(this.genre.adresse, [Validators.required]),
      })
      this.personnel = res;
    })
  }

  confirme(id) {
    this.service.updatePersonnel(id, this.messageFormmodif.value).subscribe((res: any) => {

      console.log(this.messageForm.value)
      alert("modifer");
      this.ngOnInit();


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
