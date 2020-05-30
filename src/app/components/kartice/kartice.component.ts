import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kartice',
  templateUrl: './kartice.component.html',
  styleUrls: ['./kartice.component.css']
})
export class KarticeComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Kartice");
  }

}
