import { Injectable } from "@angular/core";
import { Korpa } from '../models/korpa.model';
import { Narudzbina } from '../models/narudzbina.model';
import { KorisnikService } from './korisnik.service';

@Injectable({
    providedIn: 'root'
})

export class NarudzbinaService {
    id: number = 0;

    private narudzbinaPodaci: Array<Narudzbina> = [
        {
            id: 1,
            restoranId: 4,
            korpa: [
            {
                obrokId: 55,
                kolicina: 2,
                cena: 1080,
                dodaci: [1,3,25],
                dodatniZahtevi: ""
            },
            {
                    obrokId: 59,
                    kolicina: 1,
                    cena: 1140,
                    dodaci: [1,3,4,33],
                    dodatniZahtevi: ""
            },
            ],
            datum: new Date(),
            komentar: "",
            sifra: "Fqw12",
            korisnik: 1,
            tip: "aktivna",
            ocenjena: false
        },
        {
            id: 2,
            restoranId: 4,
            korpa: [
               {
                   obrokId: 55,
                   kolicina: 2,
                   cena: 1080,
                   dodaci: [1,3,25],
                   dodatniZahtevi: ""
               },
               {
                    obrokId: 59,
                    kolicina: 1,
                    cena: 1140,
                    dodaci: [1,3,4,33],
                    dodatniZahtevi: ""
               },
            ],
            datum: new Date(),
            komentar: "Dodatni zahtev",
            sifra: "A21ds",
            korisnik: 1,
            tip: "otkazana",
            ocenjena: true
        },
        {
            id: 3,
            restoranId: 4,
            korpa: [
               {
                   obrokId: 55,
                   kolicina: 2,
                   cena: 1080,
                   dodaci: [1,3,25],
                   dodatniZahtevi: ""
               },
               {
                    obrokId: 59,
                    kolicina: 1,
                    cena: 1140,
                    dodaci: [1,3,4,33],
                    dodatniZahtevi: ""
               },
            ],
            datum: new Date(),
            komentar: "",
            sifra: "Bs12a",
            korisnik: 1,
            tip: "zavrsena",
            ocenjena: false
    
        }
    ];

    constructor(private korisnikService: KorisnikService) {}
    
    dodajNarudzbinu(korpa:Array<Korpa>, restoranId:number, komentar:string, korisnik:number):void{
        let maxId:number = 0;
        this.narudzbinaPodaci.forEach(narudzbina=>{
            if(maxId < narudzbina.id){
                maxId = narudzbina.id;
            }
        });

        let id: number = ++maxId;
        let datum: Date = new Date();
        let sifra: string = this.getSifra();
        let tip: any = "aktivna";
        let ocenjena: boolean = false;
        let narudzbina: Narudzbina = {id,restoranId,korpa,datum,komentar,sifra,korisnik,tip,ocenjena};

        this.narudzbinaPodaci.push(narudzbina);
        this.korisnikService.dodajNarudzbinuById(korisnik,id);
    }

    getSifra():string{
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 5; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    getNarudzbinaById(id:number):Narudzbina{
        return this.narudzbinaPodaci.find(narudzbina=>narudzbina.id==id);
    }

    getAktivneNarudzbineByKorisnikId(id:number):Array<Narudzbina>{
        return this.narudzbinaPodaci.filter(narudzbina => narudzbina.korisnik == id && narudzbina.tip=="aktivna");
    }

    getIstorijaNarudzbineByKorisnikId(id:number):Array<Narudzbina>{
        return this.narudzbinaPodaci.filter(narudzbina => narudzbina.korisnik == id && narudzbina.tip!="aktivna");
    }

    getBrojNeocenjenihNarudzbinaByKorisnikId(id:number):number{
        let n = this.getIstorijaNarudzbineByKorisnikId(id);
        let k = 0;
        n.forEach(e=>{
            if(!e.ocenjena){
                k++;
            }
        });
        return k;
    }

    izbrisiAktivnuNarudzbinu(id:number):void{
        this.narudzbinaPodaci.find(narudzbina => narudzbina.id == id).tip="otkazana";
        this.narudzbinaPodaci.find(narudzbina => narudzbina.id == id).ocenjena = true;
    }

    oceniPoruku(id:number):void{
        this.narudzbinaPodaci.find(narudzbina => narudzbina.id == id).ocenjena = true;
    }
}