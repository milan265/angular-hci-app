import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { NarudzbinaService } from 'src/app/services/narudzbina.service';
import { ObrokService } from 'src/app/services/obrok.service';
import { RestoranService } from 'src/app/services/restoran.service';
import { DialogOceniNarudzbinuComponent } from './dialog-oceni-narudzbinu/dialog-oceni-narudzbinu.component';

@Component({
  selector: 'app-istorija',
  templateUrl: './istorija.component.html',
  styleUrls: ['./istorija.component.css']
})
export class IstorijaComponent implements OnInit, AfterViewInit {

  email: string = "";
  kolone = ['sifra',"restoran","obroci","cena","datum","komentar","tip","oceni"];
  podaciZaTabelu = new MatTableDataSource<Object>();

  @ViewChild(MatSort,{static:false}) sort :MatSort;
  @ViewChild(MatPaginator,{static:false}) paginator :MatPaginator;


  constructor(private narudzbinaService: NarudzbinaService, private cookieService: CookieService,
              private korisnikService: KorisnikService, private restoranService: RestoranService,
              private obrokService: ObrokService, private dialog: MatDialog) { }

  ngOnInit() {
    this.email = this.cookieService.get("email");
    this.pripremiPodatke();
    //console.log(this.podaciZaTabelu.data);
  }

  pripremiPodatke(){
    let korisnikId = this.korisnikService.getIdByEmail(this.email);
    let podaci = this.narudzbinaService.getIstorijaNarudzbineByKorisnikId(korisnikId);
    podaci.sort((a,b)=>{
      if(a.id<b.id){
        return 1;
      }else{
        return -1;
      }
    });
    this.podaciZaTabelu.data = podaci.map(e=>{
      let cena = 0;
      e.korpa.forEach(k=> cena += k.cena);
      let obroci: string = "";
      e.korpa.forEach(e=> obroci += this.obrokService.getNazivById(e.obrokId)+ " x " + e.kolicina + "; ");
      
      return {
        id: e.id,
        sifra: e.sifra,
        restoran: this.restoranService.getRestoranNazivById(e.restoranId),
        restoranId: e.restoranId,
        obroci: obroci,
        cena: cena,
        datum: e.datum,
        komentar: e.komentar,
        tip: e.tip
      }
    });
  }

  ngAfterViewInit(){
    this.podaciZaTabelu.sort = this.sort;
    this.podaciZaTabelu.paginator = this.paginator;
  }

  filterTabele(v:string):void{
    this.podaciZaTabelu.filter = v.trim().toLocaleLowerCase();
  }

  oceniNarudzbinu(restoranId:number, id:number):void{
    this.dialog.open(DialogOceniNarudzbinuComponent, {
      data:{
        restoranId:restoranId,
        id: id
      }
    });
  }
  ocenjena(id:number):boolean{
    return this.narudzbinaService.getNarudzbinaById(id).ocenjena;
  }
}

