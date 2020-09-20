import { Injectable } from "@angular/core";
import { Narudzbina } from '../models/narudzbina.model';
import { KorisnikService } from './korisnik.service';

@Injectable({
    providedIn: 'root'
})

export class NarudzbinaService {
    id: number = 0;

    private narudzbinaPodaci: Array<Narudzbina> = [];

    constructor(private korisnikService: KorisnikService) {}
    
    dodajNarudzbinu(restoran:number,obroci:Array<number>,iznos:number,komentar:string,korisnik:number):void{
        let maxId:number = 0;
        this.narudzbinaPodaci.forEach(narudzbina=>{
            if(maxId < narudzbina.id){
                maxId = narudzbina.id;
            }
        });

        let id: number = ++maxId;
        let datum: Date = new Date();
        let sifra: string = this.getSifra();

        let narudzbina: Narudzbina = {id,restoran,obroci,datum,iznos,komentar,sifra,korisnik};

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

}