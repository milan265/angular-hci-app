import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Restoran } from 'src/app/models/restoran.model';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { RestoranService } from 'src/app/services/restoran.service';

@Component({
  selector: 'app-omiljeni-restorani',
  templateUrl: './omiljeni-restorani.component.html',
  styleUrls: ['./omiljeni-restorani.component.css']
})
export class OmiljeniRestoraniComponent implements OnInit {

  imaOmiljenih: boolean = false;
  restorani: Array<Restoran> = [];
  email: string = "";
  restoraniPretraga: Array<Restoran>;

  constructor(private titleService: Title, private cookieService: CookieService, private router: Router,
              private restoranService: RestoranService, private korisnikService: KorisnikService) { }

  ngOnInit() {
    if(this.cookieService.get("ulogovan")=="false"){
      this.router.navigate(["404"]);
    }else{
      this.titleService.setTitle("Omiljeni restorani");
      this.email = this.cookieService.get("email");
      this.korisnikService.getOmiljeniRestorani(this.email).forEach(id=>{
        this.restorani.push(this.restoranService.getRestoranById(id));
      });
      this.imaOmiljenih = this.restorani.length>0? true:false;
    }
  }

  getOcena(id:number):string{
    return this.restoranService.getOcenaById(id);
  }

  prikaziRestoran(id:number):void{
    this.cookieService.set("restoran_id",id.toString());
    this.router.navigate(['prikaz-restorana']);
  }

  pretragaRestorana(e:any){
    if (e.target.value == '') {
      this.restoraniPretraga = undefined;
      return;
    }
    this.restoraniPretraga = this.restorani.filter(restoran => 
                              restoran.naziv.toLowerCase().includes(e.target.value.toLowerCase()))
                              .slice(0,5);
  }

}
