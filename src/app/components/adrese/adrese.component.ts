import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-adrese',
  templateUrl: './adrese.component.html',
  styleUrls: ['./adrese.component.css']
})
export class AdreseComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Adrese");
  }

}
