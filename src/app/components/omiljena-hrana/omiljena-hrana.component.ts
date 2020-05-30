import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-omiljena-hrana',
  templateUrl: './omiljena-hrana.component.html',
  styleUrls: ['./omiljena-hrana.component.css']
})
export class OmiljenaHranaComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Omiljena hrana");
  }

}
