import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DodatakObrokuService } from 'src/app/services/dodatakObroku.service';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { NarudzbinaService } from 'src/app/services/narudzbina.service';
import { ObrokService } from 'src/app/services/obrok.service';
import { RestoranService } from 'src/app/services/restoran.service';
import { DialogIzbrisiKorpaComponent } from './dialog-izbrisi-korpa/dialog-izbrisi-korpa.component';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent implements OnInit {
  sadrzajKorpe;
  selected: number;
  restorani: Array<number> = [];
  dugmeNaruci: boolean = false;
  minNarudzbina: number = 0;
  racun: number = 0;
  obroci = [];
  komentar: string = "";

  constructor(private cookieService: CookieService, private restoranService: RestoranService,
              private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar,
              private obrokService: ObrokService, private dodatakObrokuService: DodatakObrokuService,
              private narudzbinaService: NarudzbinaService, private korisnikService: KorisnikService) { }

  ngOnInit() {
    if(this.cookieService.check("korpa")){
      this.sadrzajKorpe = JSON.parse(this.cookieService.get("korpa"));
      console.log(this.sadrzajKorpe);
      if(this.sadrzajKorpe.length>0){
        this.restorani = this.sadrzajKorpe.map(obrok=>obrok.restoran).filter((v,i,a)=>a.indexOf(v)===i);
        this.selected = this.restorani[0];
        this.promeniRestoran();
      }
    }
  }

  praznaKorpa():boolean{
    if(this.cookieService.check("korpa")){
      this.sadrzajKorpe = JSON.parse(this.cookieService.get("korpa"));
      if(this.sadrzajKorpe.length>0){
        this.restorani = this.sadrzajKorpe.map(obrok=>obrok.restoran).filter((v,i,a)=>a.indexOf(v)===i);
        return false;
      }else{
        return true;
      }
    }else{
      return true;
    }
  }

  getNazivByRestoranId(restoranId):string{
    return this.restoranService.getRestoranNazivById(restoranId);
  }
  
  promeniRestoran():void{
    this.racun = 0;
    this.obroci = this.sadrzajKorpe.filter(e=>e.restoran==this.selected);
    this.obroci.forEach(obrok => this.racun += obrok.cena);
    this.minNarudzbina = this.restoranService.getMinCenaNarudzbineById(this.selected)-this.racun;
    this.dugmeNaruci = this.minNarudzbina>0 ? false:true;    
  }

  obrisiNarudzbinu(){//otvara dialog
    const dialogRef = this.dialog.open(DialogIzbrisiKorpaComponent,{
      data:{
        id: this.selected
      }
    });
    dialogRef.afterClosed().subscribe(result=> {
      if(result){
        this.selected = this.restorani[0];
      }
    });
  }

  ukloniNarudzbinu(){//ne otvara dialog
    let korpaStaro = this.sadrzajKorpe;
    this.sadrzajKorpe = [];
    korpaStaro.forEach(obrok => {
      if(obrok.restoran!=this.selected){
        this.sadrzajKorpe.push(obrok);
      }
    });
    this.cookieService.set("korpa",JSON.stringify(this.sadrzajKorpe));
    if(this.sadrzajKorpe.length>0){
      this.selected = this.sadrzajKorpe[0].restoran;
    }
  }


  getNazivObrokById(obrokId):string{
    return this.obrokService.getNazivById(obrokId);
  }

  getNazivDodatkaById(dodatakId):string{
    return this.dodatakObrokuService.getNazivById(dodatakId);
  }


  izbrisiObrok(index):void{
    let i = this.sadrzajKorpe.indexOf(this.sadrzajKorpe.find(e=>e.index==index));
    this.sadrzajKorpe.splice(i,1);
    this.cookieService.set("korpa",JSON.stringify(this.sadrzajKorpe));
    this.promeniRestoran();
    if(this.obroci.length==0){
      this.ukloniNarudzbinu();
      this.promeniRestoran();
    }
  }

  povratakNaRestoran():void{
    this.cookieService.set("restoran_id",this.selected.toString());
    this.router.navigate(['prikaz-restorana']);
  }

  naruci():void{
    let korisnikId:number = this.korisnikService.getIdByEmail(this.cookieService.get("email"));
    this.narudzbinaService.dodajNarudzbinu(this.selected, this.obroci,this.racun,this.komentar,korisnikId);

    this.ukloniNarudzbinu();
    this.promeniRestoran();
    this.snackBar.open("Uspešno ste naručili hranu")
  }
}
