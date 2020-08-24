import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScrollToService } from 'src/app/services/scroll-to.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  constructor(private titleService: Title, private scrollToService: ScrollToService) { }

  ngOnInit() {
    this.scrollToService.scrollToTop();
    this.titleService.setTitle("Stranica nije pronađena");
  }

}
