import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {
  
  vidljivost:string = "visibility_off";
  sakrivenaLozinka:boolean = true;
  tipLozinke:string = "password";

  greska:boolean = false;
  greskaPoruka:string = "";

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Prijava");
  }

  onSubmit(form: NgForm){
    console.log("onsubmit");
  }

  sakrijLozinku(){
    if(this.sakrivenaLozinka){
      this.sakrivenaLozinka = false;
      this.tipLozinke = "text";
      this.vidljivost = "visibility";
    }else{
      this.sakrivenaLozinka = true;
      this.tipLozinke = "password";
      this.vidljivost = "visibility_off";
    }
  }


}
