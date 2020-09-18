import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-dialog-izbrisi',
  templateUrl: './dialog-izbrisi.component.html',
  styleUrls: ['./dialog-izbrisi.component.css']
})
export class DialogIzbrisiComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public podaci: any, private snackBar: MatSnackBar,
              private korisnikService: KorisnikService, private cookieService: CookieService) { }

  ngOnInit() {
  }

  izbrisi(){
    this.korisnikService.izbrisiAdresu(this.cookieService.get("email"), this.podaci.id);
    this.snackBar.open("Uspešno ste izbrisali adresu");
  }
}
