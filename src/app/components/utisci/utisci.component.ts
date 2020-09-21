import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  nemaUtisaka: boolean = true;
  email: string = "";

  constructor(private titleService: Title, private restoranService: RestoranService, private router: Router,
              private cookieService: CookieService, private korisnikService: KorisnikService) { }

  ngOnInit() {
    if(this.cookieService.get("ulogovan")=="false"){
      this.router.navigate(["404"]);
    }else{
      this.titleService.setTitle("Utisci");
      this.email = this.cookieService.get("email");
      this.utisci = this.korisnikService.getUtisciByEmail(this.email);
      this.utisci.sort((a,b)=>{
        if(a.vreme<b.vreme){
          return 1;
        }else{
          return -1;
        }
      });
      this.nemaUtisaka = this.utisci.length==0? true: false;
    }
  }

  getNazivRestoranaById(restoranId): string{
    return this.restoranService.getRestoranById(restoranId).naziv;
  }
}

