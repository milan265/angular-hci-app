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
  cena: number = 0;
  kolicina: number = 1;
  prilozi: Array<DodatakObroku> = [];
  naslovi: Array<string> = [];
  radioButton;

 
  constructor(@Inject(MAT_DIALOG_DATA) public podaci: any, private dodatakObrokuService: DodatakObrokuService,
              private cookieService: CookieService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.ulogovan = (this.cookieService.get('ulogovan')=='true')?true:false;
    this.cena = this.podaci.obrok.cena * this.kolicina;
    this.podaci.obrok.dodaci.forEach(id=>this.prilozi.push(this.dodatakObrokuService.getDodatakObrokuById(id)));
    var sviNaslovi = this.prilozi.map(e=>e.naslovDodatka);
    this.naslovi = sviNaslovi.filter((v, i, a) => a.indexOf(v) === i);
  }

  smanjiKolicinu(){
    if(this.kolicina>1){
      this.kolicina--;
      this.cena = this.podaci.obrok.cena * this.kolicina;
    }
  }

  povecajKolicinu(){
    this.kolicina++;
    this.cena = this.podaci.obrok.cena * this.kolicina;
  }

  checkBoxClick(prilogId){
    console.log(prilogId);

  }

  radioButtonClick(prilogId){
    console.log(prilogId);
  }

  dodajUKorpu(){
    console.log(this.podaci.obrok);
  }
}
