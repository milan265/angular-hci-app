import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-dialog-primarna',
  templateUrl: './dialog-primarna.component.html',
  styleUrls: ['./dialog-primarna.component.css']
})
export class DialogPrimarnaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public podaci: any, private snackBar: MatSnackBar,
              private korisnikService: KorisnikService, private cookieService: CookieService) { }

  ngOnInit() {
  }

  promeni(){
    this.korisnikService.postaviKaoPrimarnu(this.cookieService.get("email"),this.podaci.id);
    this.snackBar.open("Uspešno ste promenili primarnu adresu");
  }

}
