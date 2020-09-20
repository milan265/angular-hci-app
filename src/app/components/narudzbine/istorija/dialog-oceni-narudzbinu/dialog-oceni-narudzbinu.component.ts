import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { NarudzbinaService } from 'src/app/services/narudzbina.service';
import { RestoranService } from 'src/app/services/restoran.service';

@Component({
  selector: 'app-dialog-oceni-narudzbinu',
  templateUrl: './dialog-oceni-narudzbinu.component.html',
  styleUrls: ['./dialog-oceni-narudzbinu.component.css']
})
export class DialogOceniNarudzbinuComponent implements OnInit {

  ocena:number = 0;
  komentar:string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public podaci: any, private snackBar: MatSnackBar,
              private korisnikService: KorisnikService, private restoranService: RestoranService,
              private cookieService: CookieService, private narudzbinaService: NarudzbinaService) { }

  ngOnInit() {
  }

  dugmeOceni():boolean{
    return this.ocena>0?true:false;
  }

  oceni(){
    let korisnikId = this.korisnikService.getIdByEmail(this.cookieService.get("email"));
    this.korisnikService.dodajUtisak(korisnikId,this.podaci.restoranId,this.ocena,this.komentar);
    this.restoranService.dodajUtisak(korisnikId,this.podaci.restoranId,this.ocena,this.komentar);
    this.narudzbinaService.oceniPoruku(this.podaci.id);
    let brNeocenjenih = this.narudzbinaService.getBrojNeocenjenihNarudzbinaByKorisnikId(korisnikId);
    if(brNeocenjenih>0){
      this.cookieService.set("neocenjeneNarudzbine",brNeocenjenih.toString());
    }else{
      this.cookieService.set("neocenjeneNarudzbine", "");
    }
    
    this.snackBar.open("Uspešno ste ocenili restoran");
  }
}
