import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-narudzbine',
  templateUrl: './narudzbine.component.html',
  styleUrls: ['./narudzbine.component.css']
})
export class NarudzbineComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Narudžbine");
  }

}
