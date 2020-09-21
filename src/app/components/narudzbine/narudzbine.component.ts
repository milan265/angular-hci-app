import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-narudzbine',
  templateUrl: './narudzbine.component.html',
  styleUrls: ['./narudzbine.component.css']
})
export class NarudzbineComponent implements OnInit {

  constructor(private titleService: Title, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    if(this.cookieService.get("ulogovan")=="false"){
      this.router.navigate(["404"]);
    }else{
      this.titleService.setTitle("Narudžbine");
    } 
  }

}
