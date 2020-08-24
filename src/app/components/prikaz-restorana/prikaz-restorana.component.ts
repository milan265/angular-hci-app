import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { RestoranService } from 'src/app/services/restoran.service';
import { ObrokService } from 'src/app/services/obrok.service';

import { Restoran } from 'src/app/models/restoran.model';
import { Obrok } from 'src/app/models/obrok.model';
import { ScrollToService } from 'src/app/services/scroll-to.service';

@Component({
  selector: 'app-prikaz-restorana',
  templateUrl: './prikaz-restorana.component.html',
  styleUrls: ['./prikaz-restorana.component.css']
})
export class PrikazRestoranaComponent implements OnInit {

  restoranId: number;
  restoran: Restoran;
  obroci: Array<Obrok> = [];
  kategorije: Array<string> = [];
  kategorijaFixed: boolean = false;


  constructor(private titleService: Title, private cookieService: CookieService, 
              private restoranService: RestoranService, private obrokService: ObrokService,
              private scrollToService: ScrollToService) { }

  ngOnInit() {
    this.scrollToService.scrollToTop();
    this.restoranId = Number(this.cookieService.get("restoran_id"));
    this.restoran = this.restoranService.getRestoranById(this.restoranId);
    this.titleService.setTitle(this.restoran.naziv);
    this.restoran.obroci.forEach(obrokId => this.obroci.push(this.obrokService.getObrokById(obrokId)));
    this.kategorije = this.restoran.kategorije;
  }

  getSlika(): string{
    let slika: string =  this.restoranService.getCoverById(this.restoranId);
    return "url('" + slika + "')";
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
      if(document.documentElement.scrollTop > 400){
        this.kategorijaFixed = true;
      }else{
        this.kategorijaFixed = false;
      }
  }
}
