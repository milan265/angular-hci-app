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
            korisnickoIme: "milansavic",
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
            kartice: [],
            omiljeniRestorani: [],
            omiljenaHrana: [],
            utisci: []
        }
    ];

    constructor() {}

    isKorisnikPostoji(email: string): boolean{
        return this.korisnikPodaci.find(korisnik => korisnik.email == email)!=undefined;
    }
    
    isLozinkaDobra(email: string, lozinka: string): boolean{
        return this.korisnikPodaci.find(korisnik => 
          korisnik.email == email && korisnik.lozinka == lozinka) != undefined;
    }

    getImeByEmail(email: string){
        return this.korisnikPodaci.find(korisnik => korisnik.email == email).ime;
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
        let korisnickoIme:string = email;
        let adrese:Array<Adresa> = [{grad,region,ulica,broj,brojStana}];
        let narudzbine = [];
        let kartice = [];
        let omiljeniRestorani = [];
        let omiljenaHrana = [];
        let utisci = [];

        let korisnik:Korisnik = {id,ime,prezime,korisnickoIme,email,lozinka,telefon,datumRegistrovanja,adrese,narudzbine,kartice,omiljeniRestorani,omiljenaHrana,utisci};

        this.korisnikPodaci.push(korisnik);
    }
}