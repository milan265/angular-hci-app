import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Restoran } from 'src/app/models/restoran.model';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  slika:string = "url('../../../assets/slike/pocetna.jpg')";
  restorani: Array<Restoran> = [];
  
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Dostava hrane");
  }
  getSlika(){
    return this.slika;
  }

  prikaziRestoran():void{
    console.log("restoran");
  }
}
