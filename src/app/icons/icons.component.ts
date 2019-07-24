import { Component, OnInit } from '@angular/core';
import { Niveau } from './service-niveau.service';
import { ServiceNiveauService } from './service-niveau.service';
import { ServiceFormationService, Formation } from '../formation/service-formation.service';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  niveaux: Niveau[];
  formations: Formation[];
  genre;
  niveau: any;
  submitted = false;
  success = false;
  messageForm = new FormGroup({

    name: new FormControl('', [Validators.required]),
    numNiveau: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    formation: new FormControl(null, [Validators.required]),
  })

  messageFormmodif = new FormGroup({

    name: new FormControl('', [Validators.required]),
    numNiveau: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    formation: new FormControl('', [Validators.required]),
  })
  constructor(private formBuilder: FormBuilder,
    private service: ServiceNiveauService, private formationservice: ServiceFormationService
  ) {
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;

    
    let formation = this.messageForm.value.formation;
    let niv = this.messageForm.value;
    delete niv['formation'];
    console.log(niv);
    console.log(formation);
    this.service.addNiveau(niv, formation).subscribe(
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

  Edit(id) {
    this.service.getNiveauId(id).subscribe((res: any) => {
      console.log("edit fn", id)

      this.genre = res;
      this.messageFormmodif = new FormGroup({
        name: new FormControl(this.genre.name, [Validators.required]),
        numNiveau: new FormControl(this.genre.numNiveau, [Validators.required]),
        description: new FormControl(this.genre.description, [Validators.required]),
        formation: new FormControl(this.genre.formation.name, [Validators.required]),
      })
      
      console.log(this.messageFormmodif.value)
      this.niveau = res;
    })
  }

  Actualise(id) {
    let niveau = this.messageFormmodif.value;
    niveau.formation = {name : this.messageFormmodif.value.formation}
     //   let formation =this.messageForm.value.formation;
     //    let niv = this.messageForm.value;
     //    delete niv['formation'];
     //    console.log(niv);
     //     console.log(formation);
    
// ´getformationbyId(id)
//this
    this.service.updateNiveau(id,niveau).subscribe((res: any) => {

      console.log(this.messageFormmodif.value)
      alert("modifer");
      this.ngOnInit();

    })

  }
  Delete(niveau) {
    this.service.deleteNiveau(niveau)
      .subscribe(data => {
        this.niveaux = this.niveaux.filter(p => p !== niveau);
        alert("vous voulez supprimer ?");
      })
  }


  inSubmit() {
    this.ngOnInit();
  }

  Submit() {
    this.formationservice.getFormation().subscribe(data => {
      this.formations = data
    })
  }

  ngOnInit() {

    this.service.getNiveau().subscribe(data => {
      this.niveaux = data
    })
    this.Submit();

  }








}

