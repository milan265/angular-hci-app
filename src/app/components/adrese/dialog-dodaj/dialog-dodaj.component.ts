import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { Adresa } from 'src/app/models/adresa.model';
import { GradoviService } from 'src/app/services/gradovi.service';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-dialog-dodaj',
  templateUrl: './dialog-dodaj.component.html',
  styleUrls: ['./dialog-dodaj.component.css']
})
export class DialogDodajComponent implements OnInit {
  
  gradovi:Array<string> = [];
  regioni:Array<string> = [];
  izabranGrad:string = "";

  constructor(private snackBar: MatSnackBar, private gradoviService: GradoviService,
              private korisnikService: KorisnikService, private cookieService: CookieService) { }

  ngOnInit() {
    this.gradovi = Object.keys(this.gradoviService.getGradRegion());
  }

  podesiRegione(){
    this.regioni = this.gradoviService.getGradRegion()[this.izabranGrad];
  }

  onSubmit(form: NgForm){
    let email = this.cookieService.get("email");
    
    let grad = form.value.grad;
    let region = form.value.region;
    let ulica = form.value.ulica;
    let broj = form.value.broj;
    let brojStana = form.value.stan;
    let id = this.korisnikService.getNewAdresaId(email);
    
    let adresa: Adresa = {grad,region,ulica,broj,brojStana,id};
    
    this.korisnikService.dodajAdresu(email,adresa);
    this.snackBar.open("Uspešno ste dodali novu adresu");
  }
}
