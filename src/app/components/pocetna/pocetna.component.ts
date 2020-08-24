import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Restoran } from 'src/app/models/restoran.model';
import { RestoranService } from 'src/app/services/restoran.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ScrollToService } from 'src/app/services/scroll-to.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  slika:string = "url('../../../assets/slike/pocetna.jpg')";
  restorani: Array<Restoran> = [];
  brojKolona: Array<number> = [0,1,2];
  brojRedova: Array<number> = [0,1,2];
  brKolona: number = this.brojKolona.length;
  brRedova: number = this.brojRedova.length;

  restoraniManji: Array<Restoran> = [];
  brojKolonaManji: Array<number> = [0];
  brojRedovaManji: Array<number> = [0,1,2,3,4];
  brKolonaManji: number = this.brojKolonaManji.length;
  brRedovaManji: number = this.brojRedovaManji.length;

  myControl = new FormControl();
  options: Array<string> = ["jedan"];
  filteredOptions: Observable<string[]>;
  
  constructor(private titleService: Title, private router: Router, private cookieService: CookieService, 
              private restoranService: RestoranService, private scrollToService: ScrollToService) { }

  ngOnInit() {
    this.scrollToService.scrollToTop();
    this.titleService.setTitle("Dostava hrane");
    this.restorani = this.restoranService.najboljiRestorani(this.brKolona*this.brRedova);
    this.restoraniManji = this.restoranService.najboljiRestorani(this.brKolonaManji*this.brRedovaManji);
    
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  getSlika(){
    return this.slika;
  }

  prikaziRestoran(id: number):void{
    this.cookieService.set("restoran_id", id.toString());
    this.router.navigate(['prikaz-restorana']);
  }

  

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
