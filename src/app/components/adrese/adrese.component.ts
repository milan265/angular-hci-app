import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { Adresa } from 'src/app/models/adresa.model';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { DialogDodajComponent } from './dialog-dodaj/dialog-dodaj.component';
import { DialogIzbrisiComponent } from './dialog-izbrisi/dialog-izbrisi.component';
import { DialogPrimarnaComponent } from './dialog-primarna/dialog-primarna.component';

@Component({
  selector: 'app-adrese',
  templateUrl: './adrese.component.html',
  styleUrls: ['./adrese.component.css']
})
export class AdreseComponent implements OnInit {
  
  adrese: Array<Adresa> = [];

  constructor(private titleService: Title, private cookieService: CookieService,
             private korisnikService: KorisnikService, private dialog: MatDialog) { }

  ngOnInit() {
    this.titleService.setTitle("Adrese");
    this.adrese = this.korisnikService.getAdreseByEmail(this.cookieService.get("email"));
  }

  imaBrojStana(adresa: Adresa):boolean{
    return adresa.hasOwnProperty("brojStana") && adresa.brojStana!="";
  }

  imaAdresu():boolean{
    return this.adrese.length>0? true:false;
  }

  primarna(adresa: Adresa):boolean{
    return adresa.id==1;
  }

  dodajNovuAdresu():void{
    const dialogConfig = new MatDialogConfig();
 
    dialogConfig.width = '60%';
    dialogConfig.height = '85%';
    this.dialog.open(DialogDodajComponent,dialogConfig);
  }

  izbrisiAdresu(adresa: Adresa):void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: adresa.id
    };
    this.dialog.open(DialogIzbrisiComponent,dialogConfig);
  }

  izaberiKaoPrimarnu(adresa: Adresa){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: adresa.id
    };
    this.dialog.open(DialogPrimarnaComponent,dialogConfig);
  }
}
