import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-utisci',
  templateUrl: './utisci.component.html',
  styleUrls: ['./utisci.component.css']
})
export class UtisciComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Utisci");
  }

}
