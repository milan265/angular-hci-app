import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Utisak } from 'src/app/models/utisak.model';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { RestoranService } from 'src/app/services/restoran.service';

@Component({
  selector: 'app-prikaz-restorana-utisci',
  templateUrl: './prikaz-restorana-utisci.component.html',
  styleUrls: ['./prikaz-restorana-utisci.component.css']
})
export class PrikazRestoranaUtisciComponent implements OnInit {

  utisci: Array<Utisak> = [];
  restoranId: number = 0;
  nemaUtisaka: boolean = true;
  restoranNaziv: string = "";

  constructor(private restoranService: RestoranService, private cookieService: CookieService, 
              private korisnikService: KorisnikService) { }

  ngOnInit() {
    this.restoranId = Number(this.cookieService.get("restoran_id"));
    this.utisci = this.restoranService.getUtisciById(this.restoranId);
    this.nemaUtisaka = this.utisci.length==0? true: false;
    this.restoranNaziv = this.restoranService.getRestoranNazivById(this.restoranId);
  }

  getImeById(id):string{
    return this.korisnikService.getImeById(id);
  }

}
