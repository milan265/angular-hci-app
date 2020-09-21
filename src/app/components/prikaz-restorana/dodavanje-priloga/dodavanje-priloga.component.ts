import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material'
import { CookieService } from 'ngx-cookie-service';
import { DodatakObroku } from 'src/app/models/dodatakObroku.model';
import { DodatakObrokuService } from 'src/app/services/dodatakObroku.service';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { RestoranService } from 'src/app/services/restoran.service';

@Component({
  selector: 'app-dodavanje-priloga',
  templateUrl: './dodavanje-priloga.component.html',
  styleUrls: ['./dodavanje-priloga.component.css']
})
export class DodavanjePrilogaComponent implements OnInit {

  ulogovan: boolean = false;
  cenaObroka: number = 0;
  cenaDodatka: number = 0;
  ukupnaCena: number = 0;
  kolicina: number = 1;
  prilozi: Array<DodatakObroku> = [];
  naslovi: Array<string> = [];
  izabraniPrilozi: Array<number> = [];
  check: Array<boolean>=[];
  dodatniZahtevi: string = "";
  omiljenaHrana: boolean = false;
  email: string = ""

 
  constructor(@Inject(MAT_DIALOG_DATA) public podaci: any, private dodatakObrokuService: DodatakObrokuService,
              private cookieService: CookieService, private snackBar: MatSnackBar, 
              private korisnikService: KorisnikService, private restoranService: RestoranService) { }

  ngOnInit() {
    this.ulogovan = (this.cookieService.get('ulogovan')=='true')?true:false;
    this.email = this.cookieService.get('email');
    this.podaci.obrok.dodaci.forEach(id=>this.prilozi.push(this.dodatakObrokuService.getDodatakObrokuById(id)));
    var sviNaslovi = this.prilozi.map(e=>e.naslovDodatka);
    this.naslovi = sviNaslovi.filter((v, i, a) => a.indexOf(v) === i);
    let prviRadioButton = true;
    this.prilozi.forEach(e=> {
        if(e.visestrukiIzbor){
          this.check[e.id] = false;
        }else if(prviRadioButton){
          this.check[e.id] = true;
          this.cenaObroka = e.cena;
          prviRadioButton = false;          
        }else{
          this.check[e.id] = false;
        }
    });
    if(prviRadioButton){
      this.cenaObroka = this.podaci.obrok.cena;
    }
    this.izracunajUkupnuCenu();
    this.omiljenaHrana = this.korisnikService.isOmiljenaHrana(this.email,this.podaci.obrok.id);
  }

  dodajOmiljenuHranu(){
    this.korisnikService.dodajOmiljenuHranu(this.email,this.podaci.obrok.id);
    this.omiljenaHrana = true;
  }

  ukloniOmiljenuHranu(){
    this.korisnikService.ukloniOmiljenuHranu(this.email, this.podaci.obrok.id);
    this.omiljenaHrana = false;
  }

  smanjiKolicinu(){
    if(this.kolicina>1){
      this.kolicina--;
      this.izracunajUkupnuCenu();
    }
  }

  povecajKolicinu(){
    this.kolicina++;
    this.izracunajUkupnuCenu();
  }

  checkBoxClick(prilogId){
    if(this.check[prilogId]){
      this.cenaDodatka -= this.dodatakObrokuService.getCenaById(prilogId);
      this.izracunajUkupnuCenu();
    }else{
      this.cenaDodatka += this.dodatakObrokuService.getCenaById(prilogId);
      this.izracunajUkupnuCenu();
    }
  }

  radioButtonClick(prilogId){
    this.prilozi.forEach(e=>{
      if(!e.visestrukiIzbor){
        this.check[e.id] = false;
      }
    });
    this.check[prilogId] = true;
    this.cenaObroka = this.dodatakObrokuService.getCenaById(prilogId);
    this.izracunajUkupnuCenu();
  }

  izracunajUkupnuCenu(){
    this.ukupnaCena = (this.cenaObroka+this.cenaDodatka)*this.kolicina;
  }

  dodajUKorpu(){
    for(let i=0; i<this.check.length; i++){
      if(this.check[i]){
        this.izabraniPrilozi.push(i);
      }
    }
    let restoranId: number = this.restoranService.getRestoranIdByObrokId(this.podaci.obrok.id);
    
    let i = 0;
    let cookieKorpa = []
    if(this.cookieService.check("korpa")){
      cookieKorpa = JSON.parse(this.cookieService.get("korpa"));
      if(cookieKorpa.length>0){
        i = cookieKorpa[cookieKorpa.length-1].index + 1;
      }
    }

    let sadrzajKorpe = {
      index: i,
      restoran: restoranId,
      obrok: this.podaci.obrok.id,
      dodaci:this.izabraniPrilozi,
      kolicina: this.kolicina,
      cena: this.ukupnaCena,
      dodatniZahtevi:this.dodatniZahtevi
    };
    
    
    cookieKorpa.push(sadrzajKorpe);
    this.cookieService.set("korpa",JSON.stringify(cookieKorpa));
    this.snackBar.open("Uspešno ste dodali proizvod u korpu");
  }
}
