import { Injectable } from "@angular/core";
import { Restoran } from '../models/restoran.model';
import { Utisak } from '../models/utisak.model';

@Injectable({
    providedIn: 'root'
})

export class RestoranService {
    private restoranPodaci: Array<Restoran> = [
        {
            id: 1,
            naziv: "Grill 51",
            adrese:[{
                grad: "Beograd",
                region: "Zvezdara",
                ulica: "Vojislava Ilića",
                broj: "51a"}],
            opis: "Najbolji roštilj u gradu!",
            logo: "../../assets/slike/restorani/grill51/logo.png",
            cover: "../../assets/slike/restorani/grill51/cover.png",
            obroci:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
            kategorije:["Roštilj","Piletina","Pohovano","Sendviči","Pomfrit","Palačinke","Piće"],
            tagovi:["rostilj","piletina","pohovano","sendvic","sendvici","pomfrit","slatke palacinke","palacinke","pice"],
            minCenaNarudzbine: 600,
            utisci:[
                {
                    ocena: 3,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 1
                },
                {
                    ocena: 5,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 1
                },
                {
                    ocena: 5,
                    komentar: "",
                    korisnik: 1,
                    vreme: new Date(2020,8,18),
                    restoran: 1
                }
            ],
            mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.377755882947!2d20.493206914924144!3d44.793489585966675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a707e00f5901b%3A0xb3c6b2398fb294ac!2sGrill%2051!5e0!3m2!1sen!2srs!4v1600376622679!5m2!1sen!2srs" 
        },
        {
            id: 2,
            naziv: "Pile&Prase",
            adrese:[{
                grad: "Beograd",
                region: "Vračar",
                ulica: "Bulevar kralja Aleksandra",
                broj: "144"}],
            opis: "Najbolji roštilj u gradu!",
            logo: "../../assets/slike/restorani/pile&prase/logo.png",
            cover: "../../assets/slike/restorani/pile&prase/cover.png",
            obroci:[28,29,30,31,32,33,34,35,36,37,38,39],
            kategorije:["Roštilj","Palačinke","Ostalo","Piće"],
            tagovi:["rostilj","sendvici","sendvic","slane palacinke","palacinke","slatke palacinke","pomfrit","pice"],            minCenaNarudzbine: 800 ,
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
            ],
            mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9352608487793!2d20.479857414924442!3d44.80250798537175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7b8a026c8575%3A0x2a81345b1d2ccf59!2sPile%20%26%20Prase!5e0!3m2!1sen!2srs!4v1600376476955!5m2!1sen!2srs"
        },
        {
            id: 3,
            naziv: "Walter",
            adrese:[{
                grad: "Beograd",
                region: "Savski venac",
                ulica: "Birčaninova",
                broj: "42"}],
            opis: "",
            logo: "../../assets/slike/restorani/walter/logo.png",
            cover: "../../assets/slike/restorani/walter/cover.png",
            obroci:[40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],
            kategorije:["Roštilj","Salate","Pomfrit","Palačinke","Piće"],
            tagovi:["rostilj","salate","salata","pomfrit","palacinke","deserti","pice"],
            minCenaNarudzbine: 800,
            utisci:[
                {
                    ocena: 4,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 3
                },
                {
                    ocena: 5,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 3
                },
                {
                    ocena: 5,
                    komentar: "",
                    korisnik: 1,
                    vreme: new Date(2020,8,18),
                    restoran: 3
                }
            ]  
        },
        {
            id: 4,
            naziv: "BigPizza",
            adrese:[{
                grad: "Beograd",
                region: "Savski venac",
                ulica: "",
                broj: ""}],
            opis: "",
            logo: "../../assets/slike/restorani/big-pizza/logo.png",
            cover: "../../assets/slike/restorani/big-pizza/cover.png",
            obroci:[55,56,57,58,59,60,61],
            kategorije:["Pica"],
            tagovi:["pica","pizza","italijanska"],
            minCenaNarudzbine: 600,
            utisci:[
                {
                    ocena: 4,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 4
                },
                {
                    ocena: 5,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 4
                },
                {
                    ocena: 3,
                    komentar: "",
                    korisnik: 1,
                    vreme: new Date(2020,8,18),
                    restoran: 4
                }
            ]   
        },
        {
            id: 5,
            naziv: "Napoli",
            adrese:[{
                grad: "Beograd",
                region: "Dušanovac",
                ulica: "",
                broj: ""}],
            opis: "",
            logo: "../../assets/slike/restorani/napoli/logo.png",
            cover: "../../assets/slike/restorani/napoli/cover.png",
            obroci:[68,69,70,71],
            kategorije:["Pica"],
            tagovi:["pica","pizza","italijanska"],
            minCenaNarudzbine: 600,
            utisci:[
                {
                    ocena: 2,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 5
                },
                {
                    ocena: 3,
                    komentar: "",
                    korisnik: 1,
                    vreme: new Date(2020,8,18),
                    restoran: 5
                },
                {
                    ocena: 5,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 5
                },
                {
                    ocena: 3,
                    komentar: "",
                    korisnik: 1,
                    vreme: new Date(2020,8,18),
                    restoran: 5
                }
            ]   
        },
        {
            id: 6,
            naziv: "Brooklyn pizza",
            adrese:[{
                grad: "Beograd",
                region: "Palilula",
                ulica: "Kraljice Marije",
                broj: "15"}],
            opis: "",
            logo: "../../assets/slike/restorani/brooklyn-pizza/logo.png",
            cover: "../../assets/slike/restorani/brooklyn-pizza/cover.png",
            obroci:[62,63,64,65,66,67],
            kategorije:["Pica"],
            tagovi:["pica","pizza","italijanska"],
            minCenaNarudzbine: 700,
            utisci:[
                {
                    ocena: 5,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 6
                },
                {
                    ocena: 3,
                    komentar: "",
                    korisnik: 1,
                    vreme: new Date(2020,8,18),
                    restoran: 6
                }
            ]   
        },
        {
            id: 7,
            naziv: "Kasper Le Mesko",
            adrese:[{
                grad: "Beograd",
                region: "Zvezdara",
                ulica: "Dimitrija Tucovića",
                broj: "25"}],
            opis: "",
            logo: "../../assets/slike/restorani/kasper-le-mesko/logo.png",
            cover: "../../assets/slike/restorani/kasper-le-mesko/cover.png",
            obroci:[72,73,74,75],
            kategorije:["Pica"],
            tagovi:["pica","pizza","italijanska","rostilj","sendvici","pohovano","palacinke"],
            minCenaNarudzbine: 600,
            utisci:[]   
        },
        {
            id: 8,
            naziv: "Madness",
            adrese:[{
                grad: "Beograd",
                region: "Dušanovac",
                ulica: "",
                broj: ""}],
            opis: "",
            logo: "../../assets/slike/restorani/madness/logo.png",
            cover: "../../assets/slike/restorani/madness/cover.png",
            obroci:[76,77,78,79],
            kategorije:["Pica"],
            tagovi:["pica","pizza","italijanska","rostilj","sendvici","palacinke","slatke palacinke"],
            minCenaNarudzbine: 500,
            utisci:[]   
        },
        {
            id: 9,
            naziv: "Intergalactic Diner",
            adrese:[{
                grad: "Beograd",
                region: "Vračar",
                ulica: "Internacionalnih brigada",
                broj: "20"}],
            opis: "Restoran iz vašeg komšiluka!",
            logo: "../../assets/slike/restorani/intergalactic-diner/logo.png",
            cover: "../../assets/slike/restorani/intergalactic-diner/cover.png",
            obroci:[80,81,82,83,84],
            kategorije:["Burgeri junetina","Burgeri piletina", "Burger vegetarijanski"],
            tagovi:["burgeri"],
            minCenaNarudzbine: 900,
            utisci:[
                {
                    ocena: 5,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 9
                },
                {
                    ocena: 5,
                    komentar: "",
                    korisnik: 1,
                    vreme: new Date(2020,8,18),
                    restoran: 9
                },
                {
                    ocena: 5,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 9
                },
                {
                    ocena: 3,
                    komentar: "",
                    korisnik: 1,
                    vreme: new Date(2020,8,18),
                    restoran: 9
                }
            ]   
        },
        {
            id: 10,
            naziv: "McDonald's",
            adrese:[{
                grad: "Beograd",
                region: "Konjarnik",
                ulica: "Vojislava Ilica",
                broj: "141"}],
            opis: "",
            logo: "../../assets/slike/restorani/mcdonalds/logo.png",
            cover: "../../assets/slike/restorani/mcdonalds/cover.png",
            obroci:[85,86,87,88,89,90,91,92,93,94,95,96,97,98],
            kategorije:["Mc Obrok","Burgeri","Pomfrit","Šejkovi"],
            tagovi:["obrok","burgeri","pomfrit","sejkovi"],
            minCenaNarudzbine: 600,
            utisci:[
                {
                    ocena: 5,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 10
                },
                {
                    ocena: 4,
                    komentar: "",
                    korisnik: 1,
                    vreme: new Date(2020,8,18),
                    restoran: 10
                }
            ]   
        },
        {
            id: 11,
            naziv: "Soya Sos",
            adrese:[{
                grad: "Beograd",
                region: "Autokomanda",
                ulica: "Bulevar oslobođenja",
                broj: "18a"}],
            opis: "",
            logo: "../../assets/slike/restorani/soya-sos/logo.png",
            cover: "../../assets/slike/restorani/soya-sos/cover.png",
            obroci:[111,112,113,114,115],
            kategorije:["Piletina","Svinjetina","Desert"],
            tagovi:["piletina","svinjetina","teletina","desert","kineska"],
            minCenaNarudzbine: 800,
            utisci:[]   
        },
        {
            id: 12,
            naziv: "Black White",
            adrese:[{
                grad: "Beograd",
                region: "Novi Beograd",
                ulica: "Bulevar Zorana Đinđića",
                broj: "12 E"}],
            opis: "",
            logo: "../../assets/slike/restorani/black-white/logo.png",
            cover: "../../assets/slike/restorani/black-white/cover.png",
            obroci:[104,105,106,107,108,109,110],
            kategorije:["Piletina","Svinjetina","Teletina","Desert"],
            tagovi:["piletina","svinjetina","teletina","desert","kineska"],
            minCenaNarudzbine: 800,
            utisci:[
                {
                    ocena: 5,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 12
                },
                {
                    ocena: 3,
                    komentar: "",
                    korisnik: 1,
                    vreme: new Date(2020,8,18),
                    restoran: 12
                },
                {
                    ocena: 5,
                    komentar: "Hrana je ukusna",
                    korisnik: 1,
                    vreme: new Date(2020,8,17),
                    restoran: 12
                },
                {
                    ocena: 4,
                    komentar: "",
                    korisnik: 1,
                    vreme: new Date(2020,8,18),
                    restoran: 12
                }
            ]   
        },
        {
            id: 13,
            naziv: "Giros kod Bucka",
            adrese:[{
                grad: "Beograd",
                region: "Zvezdara",
                ulica: "Ustanička",
                broj: "235"}],
            opis: "",
            logo: "../../assets/slike/restorani/giros-kod-bucka/logo.png",
            cover: "../../assets/slike/restorani/giros-kod-bucka/cover.png",
            obroci:[99,100,101,102,103],
            kategorije:["Giros"],
            tagovi:["giros"],
            minCenaNarudzbine: 700,
            utisci:[]   
        }
    ];
    
    constructor() {}

    getSviRestorani():Array<Restoran>{
        return this.restoranPodaci;
    }

    getRestoranById(id: number):Restoran{
        return this.restoranPodaci.find(restoran => restoran.id==id);
    }

    getRestoranByNaziv(naziv: string):Restoran{
        return this.restoranPodaci.find(restoran => restoran.naziv == naziv);
    }

    getKategorijeById(id: number):Array<string>{
        return this.restoranPodaci.find(restoran => restoran.id == id).kategorije;
    }
    
    getTagoviById(id: number):Array<string>{
        return this.restoranPodaci.find(restoran => restoran.id == id).tagovi;
    }

    getCoverById(id:number):string{
        return this.restoranPodaci.find(restoran => restoran.id == id).cover;
    }

    getLogoById(id:number):string{
        return this.restoranPodaci.find(restoran => restoran.id == id).logo;
    }

    getRestoranNazivById(id:number):string{
        return this.restoranPodaci.find(restoran => restoran.id == id).naziv;
    }

    najboljiRestorani(n: number):Array<Restoran>{
        return this.restoranPodaci.sort((r1,r2)=>parseFloat(this.getOcenaById(r2.id))-parseFloat(this.getOcenaById(r1.id))).slice(0,n);
    }

    getUtisciById(id:number):Array<Utisak>{
        return this.restoranPodaci.find(restoran => restoran.id == id).utisci;
    }

    getMapaById(id:number):string{
        return this.restoranPodaci.find(restoran => restoran.id == id).mapa;
    }

    getRestoranIdByObrokId(obrokId:number):number{
        return this.restoranPodaci.find(restoran => restoran.obroci.includes(obrokId)).id;
    }

    getMinCenaNarudzbineById(id:number):number{
        return this.restoranPodaci.find(restoran => restoran.id == id).minCenaNarudzbine;
    }

    getOcenaById(id):string{
        let suma = 0;
        let utisci = this.restoranPodaci.find(restoran=> restoran.id==id).utisci;
        utisci.forEach(utisak => suma += utisak.ocena);
        return (suma/utisci.length).toFixed(1);
    }

    dodajUtisak(korisnikId:number, restoranId: number, ocena:number, komentar:string):void{
        let utisak: Utisak = {
            komentar: komentar,
            korisnik: korisnikId,
            ocena: ocena,
            restoran: restoranId,
            vreme: new Date()
        };
        this.restoranPodaci.find(restoran => restoran.id == restoranId).utisci.push(utisak);
    }
}