import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-uslovi-koriscenja',
  templateUrl: './uslovi-koriscenja.component.html',
  styleUrls: ['./uslovi-koriscenja.component.css']
})
export class UsloviKoriscenjaComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Uslovi korišćenja");
  }

}
