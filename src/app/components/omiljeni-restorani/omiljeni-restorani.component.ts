import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-omiljeni-restorani',
  templateUrl: './omiljeni-restorani.component.html',
  styleUrls: ['./omiljeni-restorani.component.css']
})
export class OmiljeniRestoraniComponent implements OnInit {

  imaOmiljenih: boolean = false;

  constructor(private titleService: Title, private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    if(this.cookieService.get("ulogovan")=="false"){
      this.router.navigate(["404"]);
    }else{
      this.titleService.setTitle("Omiljeni restorani");
    }
  }

}
