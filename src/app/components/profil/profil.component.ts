import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { MatSnackBar } from '@angular/material';
import { Korisnik } from 'src/app/models/korisnik.model';
import { NgForm } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  vidljivostTrenutna:string = "visibility_off";
  sakrivenaLozinkaTrenutna:boolean = true;
  tipLozinkeTrenutna:string = "password";

  vidljivostNova:string = "visibility_off";
  sakrivenaLozinkaNova:boolean = true;
  tipLozinkeNova:string = "password";

  greska:boolean = false;
  greskaPoruka:string = "";

  email:string;
  korisnikIme: string;
  korisnikPrezime:string;
  korisnikbrojTelefona:string;

  constructor(private titleService: Title, private cookieService: CookieService, private appComponent: AppComponent,
              private korisnikService: KorisnikService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.titleService.setTitle("Profil");
    this.email = this.cookieService.get("email");
    this.korisnikIme = this.korisnikService.getImeByEmail(this.email);
    this.korisnikPrezime = this.korisnikService.getPrezimeByEmail(this.email);
    this.korisnikbrojTelefona = this.korisnikService.getBrojTelefonaByEmail(this.email);
  }
  
  onSubmitPodaci(form:NgForm){
    this.korisnikService.promeniIme(this.email,this.korisnikIme);
    this.korisnikService.promeniPrezime(this.email,this.korisnikPrezime);
    this.korisnikService.promeniBrojTelefona(this.email,this.korisnikbrojTelefona);
    this.cookieService.set("prijavljenKorisnikIme",this.korisnikIme);
    this.appComponent.prijavljenKorisnikIme = this.korisnikIme;
    this.snackBar.open("Uspešno sačuvani podaci");
  }

  onSubmitLozinka(form:NgForm){
    let trenutnaLozinka = form.value.trenutnaLozinka;
    let novaLozinka = form.value.novaLozinka;
    let lozinkaDobra = this.korisnikService.isLozinkaDobra(this.email,trenutnaLozinka);
    if(!lozinkaDobra){
      this.greska = true;
      this.greskaPoruka = "Pogrešno uneta trenutna lozinka";
      return;
    }
    this.greska = false;
    this.korisnikService.promeniLozinku(this.email,novaLozinka);
    this.snackBar.open("Uspešno promenjena lozinka");
  }

  sakrijLozinkuTrenutnu(){
    if(this.sakrivenaLozinkaTrenutna){
      this.sakrivenaLozinkaTrenutna = false;
      this.tipLozinkeTrenutna = "text";
      this.vidljivostTrenutna = "visibility";
    }else{
      this.sakrivenaLozinkaTrenutna = true;
      this.tipLozinkeTrenutna = "password";
      this.vidljivostTrenutna = "visibility_off";
    }
  }

  sakrijLozinkuNovu(){
    if(this.sakrivenaLozinkaNova){
      this.sakrivenaLozinkaNova = false;
      this.tipLozinkeNova = "text";
      this.vidljivostNova = "visibility";
    }else{
      this.sakrivenaLozinkaNova = true;
      this.tipLozinkeNova = "password";
      this.vidljivostNova = "visibility_off";
    }
  }

}
