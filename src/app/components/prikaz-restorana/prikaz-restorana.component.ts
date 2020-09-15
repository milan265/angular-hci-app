import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material';

import { Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { RestoranService } from 'src/app/services/restoran.service';
import { ObrokService } from 'src/app/services/obrok.service';
import { ScrollToService } from 'src/app/services/scroll-to.service';

import { Restoran } from 'src/app/models/restoran.model';
import { Obrok } from 'src/app/models/obrok.model';
import { DodavanjePrilogaComponent } from 'src/app/components/prikaz-restorana/dodavanje-priloga/dodavanje-priloga.component'; 
import { Router } from '@angular/router';

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
              private scrollToService: ScrollToService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.scrollToService.scrollToTop();
    if(!this.cookieService.check("restoran_id")){
      this.router.navigate(['404']);
    }
    this.restoranId = Number(this.cookieService.get("restoran_id"));
    if(this.restoranId)
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
  
}
