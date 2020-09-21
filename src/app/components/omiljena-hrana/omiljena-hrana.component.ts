import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material';

import { Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { ObrokService } from 'src/app/services/obrok.service';
import { KorisnikService } from 'src/app/services/korisnik.service';

import { Obrok } from 'src/app/models/obrok.model';
import { DodavanjePrilogaComponent } from 'src/app/components/prikaz-restorana/dodavanje-priloga/dodavanje-priloga.component'; 
import { RestoranService } from 'src/app/services/restoran.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-omiljena-hrana',
  templateUrl: './omiljena-hrana.component.html',
  styleUrls: ['./omiljena-hrana.component.css']
})
export class OmiljenaHranaComponent implements OnInit {

  omiljenaHrana: Array<number> = [];
  obroci: Array<Obrok> = [];
  kategorije: Array<string> = [];
  kategorijaFixed: boolean = false;
  imaOmiljenih: boolean = false;


  constructor(private titleService: Title, private cookieService: CookieService, 
              private obrokService: ObrokService,private dialog: MatDialog, 
              private korisnikService: KorisnikService, private restoranService: RestoranService,
              private router: Router) { }

  ngOnInit() {
    if(this.cookieService.get("ulogovan")=="false"){
      this.router.navigate(["404"]);
    }else{
      this.titleService.setTitle("Omiljena hrana");
      this.omiljenaHrana = this.korisnikService.getOmiljenaHrana(this.cookieService.get("email"));
      this.omiljenaHrana.forEach(id=>this.obroci.push(this.obrokService.getObrokById(id)));
      var sveKategorije = this.obroci.map(e=>e.kategorija);
      this.kategorije = sveKategorije.filter((v, i, a) => a.indexOf(v) === i); 
      if(this.omiljenaHrana.length>0){
        this.imaOmiljenih = true;
      }else{
        this.imaOmiljenih = false;
      }
    }
    
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
      if(document.documentElement.scrollTop > 179){
        this.kategorijaFixed = true;
      }else{
        this.kategorijaFixed = false;
      }
  }

  scrollToElement(id): void {
    let element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  getRestoranNaziv(obrokId):string{
    return this.restoranService.getRestoranNazivById(this.restoranService.getRestoranIdByObrokId(obrokId));
  }

  dodajPrilog(id):void{
    let obrok = this.obrokService.getObrokById(id);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '60%';
    dialogConfig.height = '85%';
    dialogConfig.data = {
      obrok: obrok
    };
    this.dialog.open(DodavanjePrilogaComponent,dialogConfig);
  }
  
}
