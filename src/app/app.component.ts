import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, NavigationStart } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { NarudzbinaService } from './services/narudzbina.service';
import { KorisnikService } from './services/korisnik.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  greska404: boolean = false;
  ulogovan: boolean = false;
  kolacici: boolean = false;

  ruteNijePrijavljen: Array<string> = ["/","/registracija","/prijava","/uslovi-koriscenja","/prikaz-restorana"];  
  rutePrijavljen: Array<string> = ["/","/profil","/narudzbine","/omiljena-hrana","/omiljeni-restorani",
                                  "/adrese","/utisci","/uslovi-koriscenja","/prikaz-restorana","/korpa"];
  prijavljenKorisnikIme: string;


  constructor(private cookieService: CookieService, private router: Router, private snackBar:MatSnackBar,
              private narudzbinaService: NarudzbinaService, private korisnikService: KorisnikService){}


  //cookie se koristi kad se stranica reload-uje

  async ngOnInit(){
    //let sveRute: Array<string> = this.ruteNijePrijavljen.concat(this.rutePrijavljen);
    if(this.cookieService.check("kolacici")){
      this.kolacici = true;
    }

    if(this.cookieService.check("ulogovan")){
      this.ulogovan = this.cookieService.get("ulogovan")=="true"?true:false;
      this.prijavljenKorisnikIme = this.cookieService.get("prijavljenKorisnikIme"); 
    }else{
      this.cookieService.set('ulogovan','false');
      this.ulogovan = false;
    }
    await this.router.events.subscribe(event=>{
      if(event instanceof NavigationStart){
        if(this.ulogovan){
          this.greska404 = this.rutePrijavljen.find(e=>e==event.url)==undefined;
        }else{
          this.greska404 = this.ruteNijePrijavljen.find(e=>e==event.url)==undefined;
        }
      }
    });
    if(this.greska404){
      this.router.navigate(["404"]);
    }
  }

  neocenjeneNarudzbine(){
    let brNeocenjenih = this.narudzbinaService.getBrojNeocenjenihNarudzbinaByKorisnikId(this.korisnikService.getIdByEmail(this.cookieService.get("email")));
    if(brNeocenjenih>0){
      this.cookieService.set("neocenjeneNarudzbine",brNeocenjenih.toString());
    }else{
      this.cookieService.set("neocenjeneNarudzbine", "");
    }
    return this.cookieService.get("neocenjeneNarudzbine");
  }

  odjaviSe():void{
    this.prijavljenKorisnikIme = "";
    this.ulogovan = false;
    this.cookieService.set("ulogovan","false");
    this.cookieService.set("email","");
    this.cookieService.set("prijavljenKorisnikIme","");
    this.cookieService.set("korpa","[]");
    this.cookieService.set('neocenjeneNarudzbine',"");
    this.snackBar.open("Odjavili ste se");
  }

  prihvatiKolacice():void{
    this.kolacici = true;
    this.cookieService.set("kolacici","true");
  }

  
}
