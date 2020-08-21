import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RestoranService } from 'src/app/services/restoran.service';
import { Restoran } from 'src/app/models/restoran.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-prikaz-restorana',
  templateUrl: './prikaz-restorana.component.html',
  styleUrls: ['./prikaz-restorana.component.css']
})
export class PrikazRestoranaComponent implements OnInit {

  constructor(private titleService: Title, private cookieService: CookieService, private restoranService:RestoranService) { }

  ngOnInit() {
    let restoranId = Number(this.cookieService.get("restoran_id"));
    this.cookieService.set("restoran_id","");
    let restoran: Restoran = this.restoranService.getRestoranById(restoranId);
    
  }

}
