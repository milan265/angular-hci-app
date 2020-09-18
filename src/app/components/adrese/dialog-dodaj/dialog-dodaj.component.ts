import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-dialog-dodaj',
  templateUrl: './dialog-dodaj.component.html',
  styleUrls: ['./dialog-dodaj.component.css']
})
export class DialogDodajComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
              private korisnikService: KorisnikService) { }

  ngOnInit() {
  }

  dodaj(){
    this.snackBar.open("Uspešno ste dodali novu adresu");
  }
}
