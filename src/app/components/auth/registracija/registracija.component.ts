import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { GradoviService } from 'src/app/services/gradovi.service';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

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

  constructor(private titleService: Title, private gradoviService: GradoviService, private cookieService:CookieService,
      private korisnikService: KorisnikService, private appComponent: AppComponent,
      private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    if(this.cookieService.get("ulogovan")=="true"){
      this.router.navigate(["404"]);
    }else{
      this.titleService.setTitle("Registracija");
      this.gradovi = Object.keys(this.gradoviService.getGradRegion());
    }
  }

  podesiRegione(){
    this.regioni = this.gradoviService.getGradRegion()[this.izabranGrad];
  }

  onSubmit(form: NgForm){
    let email: string = form.value.email;
    if(!this.korisnikService.isKorisnikPostoji(email)){
      this.korisnikService.registrujKorisnika(
        form.value.ime,
        form.value.prezime,
        email,
        form.value.lozinka,
        form.value.brojTelefona,
        form.value.grad,
        form.value.region,
        form.value.ulica,
        form.value.broj,
        form.value.stan
      );
      this.greska = false;
      this.appComponent.prijavljenKorisnikIme = this.korisnikService.getImeByEmail(email);
      this.appComponent.ulogovan = true;
      this.cookieService.set("ulogovan","true");
      this.cookieService.set("email",email);
      this.cookieService.set("prijavljenKorisnikIme",this.korisnikService.getImeByEmail(email));
      this.router.navigate(['']);
      this.snackBar.open("Uspešno ste se registrovali");
    }else{
      this.greska = true;
      this.greskaPoruka = "Korisnik sa unetom e-mail adresom već postoji";
    }
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
