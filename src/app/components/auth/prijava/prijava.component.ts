import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ZaboravljenaLozinkaComponent } from './zaboravljena-lozinka/zaboravljena-lozinka.component';
import { NarudzbinaService } from 'src/app/services/narudzbina.service';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {
  
  vidljivost:string = "visibility_off";
  sakrivenaLozinka:boolean = true;
  tipLozinke:string = "password";

  greska:boolean = false;
  greskaPoruka:string = "";

  constructor(private titleService: Title, private korisnikService: KorisnikService,
            private cookieService: CookieService, private router:Router, private appComponent: AppComponent,
            private snackBar: MatSnackBar, private dialog: MatDialog, private narudzbinaService: NarudzbinaService) { }

  ngOnInit() {
    this.titleService.setTitle("Prijava");
  }

  onSubmit(form: NgForm){
    let email: string = form.value.email;
    let lozinka: string = form.value.lozinka;
    if(!this.korisnikService.isLozinkaDobra(email,lozinka)){
      this.greska = true;
      this.greskaPoruka = "Korisnik sa unetim podacima ne postoji";
      return
    }
    this.greska = false;
    this.appComponent.ulogovan = true;
    this.appComponent.prijavljenKorisnikIme = this.korisnikService.getImeByEmail(email);
    this.cookieService.set("ulogovan","true");
    this.cookieService.set("email",email);
    this.cookieService.set("prijavljenKorisnikIme",this.korisnikService.getImeByEmail(email));
    let brNeocenjenih = this.narudzbinaService.getBrojNeocenjenihNarudzbinaByKorisnikId(this.korisnikService.getIdByEmail(email));
    if(brNeocenjenih>0){
      this.cookieService.set("neocenjeneNarudzbine",brNeocenjenih.toString());
    }else{
      this.cookieService.set("neocenjeneNarudzbine", "");
    }
   
    this.router.navigate(['']);
    this.snackBar.open("Prijavljeni ste");
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

  zaboravljenaLozinka(){
    this.dialog.open(ZaboravljenaLozinkaComponent);
  }

}
