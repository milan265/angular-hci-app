import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { GradoviService } from 'src/app/services/gradovi.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  vidljivost:string = "visibility_off";
  sakrivenaLozinka:boolean = true;
  tipLozinke:string = "password";

  greska:boolean = false;
  greskaPoruka:string = "";

  gradovi:Array<string> = [];
  regioni:Array<string> = [];
  izabranGrad:string = "";

  constructor(private titleService: Title, private gradoviService: GradoviService) { }

  ngOnInit() {
    this.titleService.setTitle("Registracija");
    this.gradovi = Object.keys(this.gradoviService.getGradRegion());
  }

  podesiRegione(){
    this.regioni = this.gradoviService.getGradRegion()[this.izabranGrad];
  }

  onSubmit(form: NgForm){
    
  }

  sakrijLozinku(){
    if(this.sakrivenaLozinka){
      this.sakrivenaLozinka = false;
      this.tipLozinke = "text";
      this.vidljivost = "visibility";
    }else{
      this.sakrivenaLozinka = true;
      this.tipLozinke = "password";
      this.vidljivost = "visibility_off";
    }
  }
}
