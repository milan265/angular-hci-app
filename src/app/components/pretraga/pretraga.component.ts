import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Restoran } from 'src/app/models/restoran.model';
import { RestoranService } from 'src/app/services/restoran.service';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.css']
})
export class PretragaComponent implements OnInit {

  imaRestorana: boolean = false;
  restorani: Array<Restoran> = [];
  email: string = ""

  constructor(private titleService: Title, private cookieService: CookieService, private router: Router,
              private restoranService: RestoranService) { }

  ngOnInit() {
    if(this.cookieService.get("ulogovan")=="false"){
      this.router.navigate(["404"]);
    }else{
      this.titleService.setTitle("Pretraga");
      this.email = this.cookieService.get("email");
      this.podaci();
    }
  }

  podaci():void{
    this.restorani = this.restoranService.getSviRestorani();
    this.imaRestorana = this.restorani.length>0? true:false;
  }

  getOcena(id:number):string{
    return this.restoranService.getOcenaById(id);
  }

  prikaziRestoran(id:number):void{
    this.cookieService.set("restoran_id",id.toString());
    this.router.navigate(['prikaz-restorana']);
  }

}
