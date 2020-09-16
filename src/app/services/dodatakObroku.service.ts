import { Injectable } from '@angular/core';
import { DodatakObroku } from '../models/dodatakObroku.model';

@Injectable({
    providedIn: 'root'
})

export class DodatakObrokuService {

    private dodatakObrokuPodaci: Array<DodatakObroku> =[
        {
            id: 1,
            naziv: "Majonez",
            naslovDodatka: "Prilozi",
            cena: 0,     
            visestrukiIzbor: true
        },
        {
            id: 2,
            naziv: "Senf",
            naslovDodatka: "Prilozi",
            cena: 0,    
            visestrukiIzbor: true
        },
        {
            id: 3,
            naziv: "Kečap",
            naslovDodatka: "Prilozi",
            cena: 0,    
            visestrukiIzbor: true
        },
        {
            id: 4,
            naziv: "Pavlaka",
            naslovDodatka: "Prilozi",
            cena: 0,    
            visestrukiIzbor: true
        },
        {
            id: 5,
            naziv: "Tartar sos",
            naslovDodatka: "Prilozi",
            cena: 0,     
            visestrukiIzbor: true
        },
        {
            id: 6,
            naziv: "Ljutenica",
            naslovDodatka: "Prilozi",
            cena: 0,     
            visestrukiIzbor: true
        },
        {
            id: 7,
            naziv: "Kupus",
            naslovDodatka: "Prilozi",
            cena: 0,    
            visestrukiIzbor: true
        },
        {
            id: 8,
            naziv: "Luk",
            naslovDodatka: "Prilozi",
            cena: 0,    
            visestrukiIzbor: true
        },
        {
            id: 9,
            naziv: "Tucana paprika",
            naslovDodatka: "Prilozi",
            cena: 0,     
            visestrukiIzbor: true
        },
        {
            id: 10,
            naziv: "Origano",
            naslovDodatka: "Prilozi",
            cena: 0,     
            visestrukiIzbor: true
        },
        {
            id: 11,
            naziv: "Plazma",
            naslovDodatka: "Prilozi",
            cena: 30,     
            visestrukiIzbor: true
        },
        {
            id: 12,
            naziv: "Kokos",
            naslovDodatka: "Prilozi",
            cena: 30,     
            visestrukiIzbor: true
        },
        {
            id: 13,
            naziv: "Toping Menta",
            naslovDodatka: "Prilozi",
            cena: 30,
            visestrukiIzbor: true
        },
        {
            id: 14,
            naziv: "Toping karamela",
            naslovDodatka: "Prilozi",
            cena: 30,            
            visestrukiIzbor: true
        },
        {
            id: 15,
            naziv: "Toping čokolada",
            naslovDodatka: "Prilozi",
            cena: 30, 
            visestrukiIzbor: true
        },
        {
            id: 16,
            naziv: "Toping jagoda",
            naslovDodatka: "Prilozi",
            cena: 30,
            visestrukiIzbor: true
        },
        {
            id: 17,
            naziv: "Banana",
            naslovDodatka: "Prilozi",
            cena: 40, 
            visestrukiIzbor: true
        },
        {
            id: 18,
            naziv: "Kikiriki",
            naslovDodatka: "Prilozi",
            cena: 60,   
            visestrukiIzbor: true
        },
        {
            id: 19,
            naziv: "Lešnik",
            naslovDodatka: "Prilozi",
            cena: 80,             
            visestrukiIzbor: true
        },
        {
            id: 20,
            naziv: "Paradajz",
            naslovDodatka: "Prilozi",
            cena: 0,             
            visestrukiIzbor: true
        },
        {
            id: 21,
            naziv: "Krastavac",
            naslovDodatka: "Prilozi",
            cena: 0,             
            visestrukiIzbor: true
        },
        {
            id: 22,
            naziv: "Urnebes",
            naslovDodatka: "Prilozi",
            cena: 0,             
            visestrukiIzbor: true
        },
        {
            id: 23,
            naziv: "Vegeta",
            naslovDodatka: "Prilozi",
            cena: 0,
            visestrukiIzbor: true
        },
        {
            id: 24,
            naziv: "Kajmak",
            naslovDodatka: "Prilozi",
            cena: 70,
            visestrukiIzbor: true
        },
        {
            id: 25,
            naziv: "Junior - 24cm",
            naslovDodatka: "Veličina",
            cena: 540,
            visestrukiIzbor: false
        },
        {
            id: 26,
            naziv: "Standard - 30cm",
            naslovDodatka: "Veličina",
            cena: 780, 
            visestrukiIzbor: false
        },
        {
            id: 27,
            naziv: "Big - 38 cm",
            naslovDodatka: "Veličina",
            cena: 960,
            visestrukiIzbor: false
        },
        {
            id: 28,
            naziv: "Junior - 24cm",
            naslovDodatka: "Veličina",
            cena: 500,
            visestrukiIzbor: false
        },
        {
            id: 29,
            naziv: "Standard - 30cm",
            naslovDodatka: "Veličina",
            cena: 720,
            visestrukiIzbor: false
        },
        {
            id: 30,
            naziv: "Big - 38cm",
            naslovDodatka: "Veličina",
            cena: 880,
            visestrukiIzbor: false
        },
        {
            id: 31,
            naziv: "Junior - 24cm",
            naslovDodatka: "Veličina",
            cena: 650, 
            visestrukiIzbor: false
        },
        {
            id: 32,
            naziv: "Standard - 30cm",
            naslovDodatka: "Veličina",
            cena: 860,  
            visestrukiIzbor: false
        },
        {
            id: 33,
            naziv: "Big - 38cm",
            naslovDodatka: "Veličina",
            cena: 1140,            
            visestrukiIzbor: false
        },
        {
            id: 34,
            naziv: "Masline",
            naslovDodatka: "Prilozi",
            cena: 0,
            visestrukiIzbor: true
        }
    ];

    constructor() {}

    getDodatakObrokuById(id: number):DodatakObroku{
        return this.dodatakObrokuPodaci.find(dodatak => dodatak.id == id);
    }

    getNazivById(id: number):string{
        return this.dodatakObrokuPodaci.find(dodatak => dodatak.id == id).naziv;
    }

    getNaslovDodatkaById(id: number):string{
        return this.dodatakObrokuPodaci.find(dodatak => dodatak.id == id).naslovDodatka;
    }

    getCenaById(id: number):number{
        return this.dodatakObrokuPodaci.find(dodatak => dodatak.id == id).cena;
    }

    isVisestrukiIzborById(id: number):boolean{
        return this.dodatakObrokuPodaci.find(dodatak => dodatak.id == id).visestrukiIzbor;
    }
}