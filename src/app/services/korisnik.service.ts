import { Injectable } from "@angular/core";
import { Korisnik } from '../models/korisnik.model';
import { Adresa } from '../models/adresa.model';
import { Utisak } from '../models/utisak.model';

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
                brojStana: "15",
                id: 1
                },
                {
                    grad: "Beograd",
                    region: "Karaburma",
                    ulica: "Bulevar",
                    broj: "125",
                    brojStana: "",
                    id: 2
                }
            ],
            narudzbine: [],
            omiljeniRestorani: [1,2,3,4,5],
            omiljenaHrana: [55,1,2,3,10,13],
            utisci: [
                {
                    ocena: 4,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 2
                },
                {
                    ocena: 5,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 2
                },
                {
                    ocena: 5,
                    komentar: "",
                    korisnik: 1,
                    vreme: new Date(2020,8,18),
                    restoran: 2
                },
                {
                    ocena: 4,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,19),
                    restoran: 2
                },
                {
                    ocena: 5,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,19),
                    restoran: 2
                },
                {
                    ocena: 5,
                    komentar: "",
                    korisnik: 1,
                    vreme: new Date(2020,8,19),
                    restoran: 2
                }
            ]
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
                brojStana: "3a",
                id: 1
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

    getIdByEmail(email: string): number{
        return this.korisnikPodaci.find(korisnik=>korisnik.email==email).id;
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

    getOmiljeniRestorani(email:string):Array<number>{
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

    getUtisciByEmail(email:string):Array<Utisak>{
        return this.korisnikPodaci.find(korisnik=>korisnik.email == email).utisci;
    }

    getAdreseByEmail(email:string):Array<Adresa>{
        return this.korisnikPodaci.find(korisnik=>korisnik.email == email).adrese;
    }

    getNarudzbineByEmail(email:string):Array<number>{
        return this.korisnikPodaci.find(korisnik=>korisnik.email==email).narudzbine;
    }

    dodajNarudzbinuById(id:number, narudzbina:number):void{
        this.korisnikPodaci.find(korisnik=>korisnik.id==id).narudzbine.push(narudzbina);
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

    dodajAdresu(email:string, adresa: Adresa):void{
        this.korisnikPodaci.find(korisnik => korisnik.email == email).adrese.push(adresa);
    }

    getNewAdresaId(email:string):number{
        let maxId:number = 0;
        this.korisnikPodaci.find(korisnik=> korisnik.email == email).adrese.forEach(adresa=>{
            if(maxId < adresa.id){
                maxId = adresa.id;
            }
        });
        return ++maxId;
    }

    izbrisiAdresu(email:string, adresaId: number):void{
        let adrese = this.korisnikPodaci.find(korisnik => korisnik.email == email).adrese;
        let index = adrese.indexOf(
            adrese.find(adresa=>adresa.id==adresaId)
        );
        adrese.splice(index, 1);
        if(index==0 && adrese.length>0){
            adrese[0].id = 1;
        }
    }

    getPrimarnaAdresaByEmail(email:string):Adresa{
        return this.korisnikPodaci.find(korisnik => korisnik.email == email).adrese[0];
    }

    postaviKaoPrimarnu(email:string, adresaId: number):void{
        let adrese = this.korisnikPodaci.find(korisnik => korisnik.email == email).adrese;
        adrese.forEach(adresa=>{
            if(adresa.id!=adresaId){
                adresa.id++;
            }else{
                adresa.id = 1;
            }
        });
        adrese.sort((a,b)=>{
            if(a.id>b.id){
                return 1;
            }else{
                return -1;
            }
        });
    }

    dodajUtisak(korisnikId:number, restoranId: number, ocena:number, komentar:string):void{
        let utisak: Utisak = {
            komentar: komentar,
            korisnik: korisnikId,
            ocena: ocena,
            restoran: restoranId,
            vreme: new Date()
        };
        this.korisnikPodaci.find(korisnik => korisnik.id == korisnikId).utisci.push(utisak);
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
        let idAdrese: number = 1;
        let adrese:Array<Adresa> = [{
            grad: grad,
            region: region,
            ulica: ulica,
            broj: broj,
            brojStana: brojStana,
            id: idAdrese
        }];
        let narudzbine = [];
        let omiljeniRestorani = [];
        let omiljenaHrana = [];
        let utisci = [];

        let korisnik:Korisnik = {id,ime,prezime,email,lozinka,telefon,datumRegistrovanja,adrese,narudzbine,omiljeniRestorani,omiljenaHrana,utisci};

        this.korisnikPodaci.push(korisnik);
    }
}