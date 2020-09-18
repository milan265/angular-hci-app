import { Injectable } from "@angular/core";
import { Korisnik } from '../models/korisnik.model';
import { Adresa } from '../models/adresa.model';

@Injectable({
    providedIn: 'root'
})

export class KorisnikService {
    private korisnikPodaci: Array<Korisnik> = [
        {  
            id: 1,
            ime: "Milan",
            prezime: "Savić",
            email:"milan.savic@mail.rs",
            lozinka:"milan123",
            telefon:"0661242659",
            datumRegistrovanja: new Date(2020,5,28),
            adrese:[{
                grad: "Beograd",
                region: "Dorćol",
                ulica: "Cara Dušana",
                broj: "20",
                brojStana: "15"
            }],
            narudzbine: [],
            omiljeniRestorani: [],
            omiljenaHrana: [55,1,2,3,10,13],
            utisci: []
        },
        {  
            id: 2,
            ime: "Pera",
            prezime: "Perić",
            email:"pera.peric@mail.rs",
            lozinka:"pera1234",
            telefon:"0631242659",
            datumRegistrovanja: new Date(2020,9,17),
            adrese:[{
                grad: "Beograd",
                region: "Dorćol",
                ulica: "Cara Dušana",
                broj: "15",
                brojStana: "3a"
            }],
            narudzbine: [],
            omiljeniRestorani: [],
            omiljenaHrana: [],
            utisci: []
        }
    ];

    constructor() {}

    getImeById(id: number):string{
        return this.korisnikPodaci.find(korisnik => korisnik.id == id).ime;
    }

    isKorisnikPostoji(email: string): boolean{
        return this.korisnikPodaci.find(korisnik => korisnik.email == email)!=undefined;
    }
    
    isLozinkaDobra(email: string, lozinka: string): boolean{
        return this.korisnikPodaci.find(korisnik => 
          korisnik.email == email && korisnik.lozinka == lozinka) != undefined;
    }

    getKorisnikByEmail(email: string):Korisnik{
        return this.korisnikPodaci.find(korisnik => korisnik.email == email);
    }

    getImeByEmail(email: string):string{
        return this.korisnikPodaci.find(korisnik => korisnik.email == email).ime;
    }
    getPrezimeByEmail(email: string):string{
        return this.korisnikPodaci.find(korisnik => korisnik.email == email).prezime;
    }
    getBrojTelefonaByEmail(email: string):string{
        return this.korisnikPodaci.find(korisnik => korisnik.email == email).telefon;
    }

    getOmiljenaHrana(email:string):Array<number>{
        return this.korisnikPodaci.find(korisnik => korisnik.email == email).omiljenaHrana;
    }

    dodajOmiljenuHranu(email:string, idObrok:number):void{
        this.korisnikPodaci.find(korisnik => korisnik.email == email).omiljenaHrana.push(idObrok);
    }
    isOmiljenaHrana(email:string, idObrok:number):boolean{
        return this.korisnikPodaci.find(korisnik => korisnik.email == email).omiljenaHrana.find(e=>e == idObrok)!=undefined;
    }
    ukloniOmiljenuHranu(email:string, idObrok:number):void{
        let index = this.korisnikPodaci.find(korisnik => korisnik.email == email).omiljenaHrana.indexOf(idObrok);
        this.korisnikPodaci.find(korisnik => korisnik.email == email).omiljenaHrana.splice(index, 1);
    }

    getOmiljenRestoran(email:string):Array<number>{
        return this.korisnikPodaci.find(korisnik => korisnik.email == email).omiljeniRestorani;
    }

    dodajOmiljenRestoran(email:string, idRestoran:number):void{
        this.korisnikPodaci.find(korisnik => korisnik.email == email).omiljeniRestorani.push(idRestoran);
    }
    isOmiljenRestoran(email:string, idRestoran:number):boolean{
        return this.korisnikPodaci.find(korisnik => korisnik.email == email).omiljeniRestorani.find(e=>e == idRestoran)!=undefined;
    }
    ukloniOmiljenRestoran(email:string, idRestoran:number):void{
        let index = this.korisnikPodaci.find(korisnik => korisnik.email == email).omiljeniRestorani.indexOf(idRestoran);
        this.korisnikPodaci.find(korisnik => korisnik.email == email).omiljeniRestorani.splice(index, 1);
    }

    promeniIme(email:string, novoIme:string):void{
        this.korisnikPodaci.forEach(korisnik=>{ 
            if(korisnik.email==email){
                korisnik.ime = novoIme;
                return;
            }
        });
    }

    promeniPrezime(email:string, novoPrezime:string):void{
        this.korisnikPodaci.forEach(korisnik=>{ 
            if(korisnik.email==email){
                korisnik.prezime = novoPrezime;
                return;
            }
        });
    }

    promeniBrojTelefona(email:string, novBrojTelefona:string):void{
        this.korisnikPodaci.forEach(korisnik=>{ 
            if(korisnik.email==email){
                korisnik.telefon = novBrojTelefona;
                return;
            }
        });
    }
    
    promeniLozinku(email:string, novaLozinka:string):void{
        this.korisnikPodaci.forEach(korisnik=>{ 
            if(korisnik.email==email){
                korisnik.lozinka = novaLozinka;
                return;
            }
        });
    }

    registrujKorisnika(ime:string, prezime:string, email:string, lozinka:string, telefon:string, grad:string, region:string, ulica:string, broj:string, brojStana:string):void{
        let maxId:number = 0;
        this.korisnikPodaci.forEach(korisnik=>{
            if(maxId < korisnik.id){
                maxId = korisnik.id;
            }
        });

        let id:number = ++maxId;
        let datumRegistrovanja:Date = new Date();
        let adrese:Array<Adresa> = [{grad,region,ulica,broj,brojStana}];
        let narudzbine = [];
        let omiljeniRestorani = [];
        let omiljenaHrana = [];
        let utisci = [];

        let korisnik:Korisnik = {id,ime,prezime,email,lozinka,telefon,datumRegistrovanja,adrese,narudzbine,omiljeniRestorani,omiljenaHrana,utisci};

        this.korisnikPodaci.push(korisnik);
    }
}