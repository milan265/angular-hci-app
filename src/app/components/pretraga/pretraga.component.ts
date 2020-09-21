import { Component, HostListener, OnInit } from '@angular/core';
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
  email: string = "";
  kategorijaFixed: boolean = false;
  check: Array<boolean>=[];
  kategorije: Array<string> = [];
  sveKategorije: boolean = true;


  constructor(private titleService: Title, private cookieService: CookieService, private router: Router,
              private restoranService: RestoranService) { }

  ngOnInit() {
    if(this.cookieService.get("ulogovan")=="false"){
      this.router.navigate(["404"]);
    }else{
      this.titleService.setTitle("Pretraga");
      this.email = this.cookieService.get("email");
      this.restorani = this.restoranService.getSviRestorani()
                                            .sort((a,b)=>{
                                              if(this.restoranService.getOcenaById(a.id)<=this.restoranService.getOcenaById(b.id)){
                                                return 1
                                              }else{
                                                return -1
                                              }
                                            });
      this.imaRestorana = this.restorani.length>0? true:false;
      
      this.kategorije = this.restoranService.getJedinstveniTagovi();
      this.kategorije.forEach((k,i)=>this.check[i]=false);
    }
  }

  getOcena(id:number):string{
    return this.restoranService.getOcenaById(id);
  }

  prikaziRestoran(id:number):void{
    this.cookieService.set("restoran_id",id.toString());
    this.router.navigate(['prikaz-restorana']);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
      if(document.documentElement.scrollTop > 179){
        this.kategorijaFixed = true;
      }else{
        this.kategorijaFixed = false;
      }
  }

  sveKategorijePodaci(){
    this.restorani = this.restoranService.getSviRestorani()
                                            .sort((a,b)=>{
                                              if(this.restoranService.getOcenaById(a.id)<=this.restoranService.getOcenaById(b.id)){
                                                return 1
                                              }else{
                                                return -1
                                              }
                                            });
    this.imaRestorana = this.restorani.length>0 ? true:false;
  }

  prikaziSveKategorije(){
    this.sveKategorije = false;
    this.check.forEach((k,i)=> this.check[i] = false);
    this.sveKategorijePodaci();
  }

  checkBoxClick(i){
    let t = true;
    this.restorani = [];
    for(let j=0; j<this.check.length; j++){
      if(j==i){
        if(!this.check[i]){
          t = false;
          let restoraniZaKategoriju = this.restoranService.getRestoraniByTag(this.kategorije[i]);
          restoraniZaKategoriju.forEach(restoran=>this.restorani.push(restoran));
        }
      }else{
        if(this.check[j]){
          t = false;
          let restoraniZaKategoriju = this.restoranService.getRestoraniByTag(this.kategorije[i]);
          restoraniZaKategoriju.forEach(restoran=>this.restorani.push(restoran));
        }
      }
    }
    if(t){
      this.sveKategorije = true;
      this.sveKategorijePodaci();
    }else{
      this.sveKategorije = false;
      this.restorani = this.restorani.filter((v, i, a) => a.indexOf(v) === i);
    }


  }
}
