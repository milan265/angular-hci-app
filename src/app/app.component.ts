import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  greska404: boolean = false;
  ulogovan: boolean = true;
  ruteNijePrijavljen: Array<string> = ["/","/registracija","/prijava","/uslovi-koriscenja"];  
  rutePrijavljen: Array<string> = ["/","/profil","/narudzbine","/omiljena-hrana","/omiljeni-restorani",
                                  "/adrese","/kartice","/utisci","/uslovi-koriscenja"];
  prijavljenKorisnikIme: string = "Milan";


  constructor(private cookieService: CookieService, private router: Router){}

  async ngOnInit(){
    let sveRute: Array<string> = this.ruteNijePrijavljen.concat(this.rutePrijavljen);
    
  }

  odjaviSe():void{
    this.ulogovan = false;
  }
}
