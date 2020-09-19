import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { RestoranService } from 'src/app/services/restoran.service';

import { Restoran } from 'src/app/models/restoran.model';
import { ScrollToService } from 'src/app/services/scroll-to.service';

@Component({
  selector: 'app-prikaz-restorana',
  templateUrl: './prikaz-restorana.component.html',
  styleUrls: ['./prikaz-restorana.component.css']
})
export class PrikazRestoranaComponent implements OnInit {

  restoranId: number;
  restoran: Restoran;
  selected = new FormControl(0);


  constructor(private cookieService: CookieService, private restoranService: RestoranService,
              private scrollToService: ScrollToService) { }

  ngOnInit() {
    this.restoranId = Number(this.cookieService.get("restoran_id"));
    this.restoran = this.restoranService.getRestoranById(this.restoranId);
  }

  getSlika(): string{
    let slika: string =  this.restoranService.getCoverById(this.restoranId);
    return "url('" + slika + "')";
  }


  onPromeniNaJelovnik(t:boolean){
    this.scrollToService.scrollToTop();
    this.selected.setValue(0);
  }



  
}
