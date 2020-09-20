import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { NarudzbinaService } from 'src/app/services/narudzbina.service';

@Component({
  selector: 'app-dialog-otkazi',
  templateUrl: './dialog-otkazi.component.html',
  styleUrls: ['./dialog-otkazi.component.css']
})
export class DialogOtkaziComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public podaci: any, private snackBar: MatSnackBar,
              private narudzbinaService: NarudzbinaService) { }

  ngOnInit() {
  }

  izbrisi(){
    this.narudzbinaService.izbrisiAktivnuNarudzbinu(this.podaci.id);
    this.snackBar.open("Uspešno ste otkazali narudžbinu");
  }
}
