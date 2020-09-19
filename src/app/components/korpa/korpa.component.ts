import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Obrok } from 'src/app/models/obrok.model';
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

  constructor(private cookieService: CookieService, private restoranService: RestoranService,
              private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar,
              private obrokService: ObrokService) { }

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

  obrisiNarudzbinu(){
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

  ukloniNarudzbinu(){
    let korpaStaro = this.sadrzajKorpe;
    this.sadrzajKorpe = [];
    korpaStaro.forEach(obrok => {
      if(obrok.restoran!=this.selected){
        this.sadrzajKorpe.push(obrok);
      }
    });
    this.cookieService.set("korpa",JSON.stringify(this.sadrzajKorpe));
    this.selected = this.restorani[0];
  }


  getNazivObrokById(obrokId):string{
    return this.obrokService.getNazivById(obrokId);
  }

  izbrisiObrok(index,obrokId):void{
    console.log(this.obroci);
    this.obroci.filter(obrok=> obrok.id==obrokId && obrok.restoran==this.selected).splice(index,1);
    console.log(this.obroci);
    /*console.log(index);
    console.log(obrokId);
    console.log(this.selected);
    console.log(this.sadrzajKorpe);
    console.log(a);*/
    //this.cookieService.set("korpa",JSON.stringify(this.sadrzajKorpe));
    //this.promeniRestoran();
  }

  povratakNaRestoran():void{
    this.cookieService.set("restoran_id",this.selected.toString());
    this.router.navigate(['prikaz-restorana']);
  }

  naruci():void{
    this.ukloniNarudzbinu();
    this.promeniRestoran();
    this.snackBar.open("Uspešno ste naručili hranu")
  }
}
