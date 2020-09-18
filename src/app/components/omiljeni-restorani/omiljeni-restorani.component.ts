import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-omiljeni-restorani',
  templateUrl: './omiljeni-restorani.component.html',
  styleUrls: ['./omiljeni-restorani.component.css']
})
export class OmiljeniRestoraniComponent implements OnInit {

  imaOmiljenih: boolean = false;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Omiljeni restorani");
  }

}
