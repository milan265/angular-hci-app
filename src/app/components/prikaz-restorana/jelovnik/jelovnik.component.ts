import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material';

import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { RestoranService } from 'src/app/services/restoran.service';
import { ObrokService } from 'src/app/services/obrok.service';
import { ScrollToService } from 'src/app/services/scroll-to.service';

import { Restoran } from 'src/app/models/restoran.model';
import { Obrok } from 'src/app/models/obrok.model';
import { DodavanjePrilogaComponent } from 'src/app/components/prikaz-restorana/dodavanje-priloga/dodavanje-priloga.component'; 
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-jelovnik',
  templateUrl: './jelovnik.component.html',
  styleUrls: ['./jelovnik.component.css']
})
export class JelovnikComponent implements OnInit {

  restoranId: number;
  restoran: Restoran;
  obroci: Array<Obrok> = [];
  kategorije: Array<string> = [];
  kategorijaFixed: boolean = false;
  infoFixed: boolean = false;
  ulogovan: boolean = false;
  omiljenRestoran: boolean = false;
  imaMapu:boolean = false;
  mapa: SafeResourceUrl;

  constructor(private titleService: Title, private cookieService: CookieService, 
              private restoranService: RestoranService, private obrokService: ObrokService,
              private scrollToService: ScrollToService, private dialog: MatDialog, private router: Router,
              private korisnikService: KorisnikService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.scrollToService.scrollToTop();
    if(!this.cookieService.check("restoran_id")){
      this.router.navigate(['404']);
    }
    this.restoranId = Number(this.cookieService.get("restoran_id"));
    this.restoran = this.restoranService.getRestoranById(this.restoranId);
    this.titleService.setTitle(this.restoran.naziv);
    this.restoran.obroci.forEach(obrokId => this.obroci.push(this.obrokService.getObrokById(obrokId)));
    this.kategorije = this.restoran.kategorije;
    this.ulogovan = (this.cookieService.get('ulogovan')=='true')?true:false;
    if(this.cookieService.get("email")!=""){
      this.omiljenRestoran = this.korisnikService.isOmiljenRestoran(this.cookieService.get("email"),this.restoranId);
    }else{
      this.omiljenRestoran = false;
    }
    if(this.restoranService.getMapaById(this.restoranId)!=undefined){
      this.mapa = this.sanitizer.bypassSecurityTrustResourceUrl(this.restoranService.getMapaById(this.restoranId));
      this.imaMapu = true;
    }else{
      this.imaMapu = false;
    }
 
  }

  getSlika(): string{
    let slika: string =  this.restoranService.getCoverById(this.restoranId);
    return "url('" + slika + "')";
  }

  getLogo(): string{
    return this.restoranService.getLogoById(this.restoranId);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
      if(document.documentElement.scrollTop > 395){
        this.kategorijaFixed = true;
        this.infoFixed = true;
      }else{
        this.kategorijaFixed = false;
        this.infoFixed = false;
      }
  }

  scrollToElement(id): void {
    let element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
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

  dodajOmiljenRestoran(){
    this.korisnikService.dodajOmiljenRestoran(this.cookieService.get("email"),this.restoranId)
    this.omiljenRestoran = true;
  }

  ukloniOmiljenRestoran(){
    this.korisnikService.ukloniOmiljenRestoran(this.cookieService.get("email"),this.restoranId);
    this.omiljenRestoran = false;
  }
  
}
