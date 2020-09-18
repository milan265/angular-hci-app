import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { Utisak } from 'src/app/models/utisak.model';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { RestoranService } from 'src/app/services/restoran.service';

@Component({
  selector: 'app-utisci',
  templateUrl: './utisci.component.html',
  styleUrls: ['./utisci.component.css']
})
export class UtisciComponent implements OnInit {

  utisci: Array<Utisak> = [];
  restoranId: number = 0;
  nemaUtisaka: boolean = true;
  restoranNaziv: string = "";
  email: string = "";

  constructor(private titleService: Title, private restoranService: RestoranService, 
              private cookieService: CookieService, private korisnikService: KorisnikService) { }

  ngOnInit() {
    this.titleService.setTitle("Utisci");
    this.restoranId = Number(this.cookieService.get("restoran_id"));
    this.email = this.cookieService.get("email");
    this.utisci = this.korisnikService.getUtisciByEmail(this.email);
    this.nemaUtisaka = this.utisci.length==0? true: false;
    this.restoranNaziv = this.restoranService.getRestoranNazivById(this.restoranId);
  }
}

