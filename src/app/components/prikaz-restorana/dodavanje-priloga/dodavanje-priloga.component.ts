import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material'
import { CookieService } from 'ngx-cookie-service';
import { DodatakObroku } from 'src/app/models/dodatakObroku.model';
import { DodatakObrokuService } from 'src/app/services/dodatakObroku.service';

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

 
  constructor(@Inject(MAT_DIALOG_DATA) public podaci: any, private dodatakObrokuService: DodatakObrokuService,
              private cookieService: CookieService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.ulogovan = (this.cookieService.get('ulogovan')=='true')?true:false;
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
    this.cenaObroka = this.dodatakObrokuService.getCenaById(prilogId);
    this.izracunajUkupnuCenu();
  }

  izracunajUkupnuCenu(){
    this.ukupnaCena = (this.cenaObroka+this.cenaDodatka)*this.kolicina;
  }

  dodajUKorpu(){
    let sadrzajKorpe = [{a:1,b:2},{a:3,b:4}];
    let sadrzajKorpeString = JSON.stringify(sadrzajKorpe);
    
    this.cookieService.set("korpa", sadrzajKorpeString);
    this.snackBar.open("Uspešno ste dodali proizvod u korpu");
  }
}
