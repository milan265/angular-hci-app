import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dialog-izbrisi-korpa',
  templateUrl: './dialog-izbrisi-korpa.component.html',
  styleUrls: ['./dialog-izbrisi-korpa.component.css']
})
export class DialogIzbrisiKorpaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public podaci: any, private snackBar: MatSnackBar,
              private cookieService: CookieService) { }

  ngOnInit() {
  }

  izbrisi(){
    let korpaStaro = JSON.parse(this.cookieService.get("korpa"));
    let sadrzajKorpe = [];
    korpaStaro.forEach(obrok => {
      if(obrok.restoran!=this.podaci.id){
        sadrzajKorpe.push(obrok);
      }
    });
    this.cookieService.set("korpa",JSON.stringify(sadrzajKorpe));
    this.snackBar.open("Uspešno ste izbrisali narudžbinu");
  }
}
