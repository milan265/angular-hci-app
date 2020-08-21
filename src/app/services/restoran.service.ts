import { Injectable } from "@angular/core";
import { Restoran } from '../models/restoran.model';

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
            opis: "",
            logo: "../../assets/slike/restorani/grill51/logo.png",
            cover: "../../assets/slike/restorani/grill51/cover.png",
            obroci:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
            kategorije:["roštilj","piletina","pohovano","sendviči","pomfrit","palačinke","piće"],
            tagovi:["rostilj","piletina","pohovano","sendvic","sendvici","pomfrit","slatke palacinke","palacinke","pice"],
            ocena: 4.3,
            minCenaNarudzbine: 600  
        },
        {
            id: 2,
            naziv: "Pile&Prase",
            adrese:[{
                grad: "Beograd",
                region: "Vračar",
                ulica: "Bulevar kralja Aleksandra",
                broj: "144"}],
            opis: "",
            logo: "../../assets/slike/restorani/pile&prase/logo.png",
            cover: "../../assets/slike/restorani/pile&prase/cover.png",
            obroci:[28,29,30,31,32,33,34,35,36,37,38,39],
            kategorije:["roštilj","sendviči","slane palačinke","slatke palačinke","ostalo","piće"],
            tagovi:["rostilj","sendvici","sendvic","slane palacinke","palacinke","slatke palacinke","pomfrit","pice"],
            ocena: 4.6,
            minCenaNarudzbine: 800 
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
            kategorije:["roštilj","salate","pomfrit","palačinke","deserti","piće"],
            tagovi:["rostilj","salate","salata","pomfrit","palacinke","deserti","pice"],
            ocena: 4.4,
            minCenaNarudzbine: 800  
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
            kategorije:["pica"],
            tagovi:["pica","pizza","italijanska"],
            ocena: 4.2,
            minCenaNarudzbine: 600  
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
            kategorije:["pica"],
            tagovi:["pica","pizza","italijanska"],
            ocena: 4.0,
            minCenaNarudzbine: 600  
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
            kategorije:["pica"],
            tagovi:["pica","pizza","italijanska"],
            ocena: 4.5,
            minCenaNarudzbine: 700  
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
            kategorije:["pica","roštilj","sendviči","pohovano","palačinke"],
            tagovi:["pica","pizza","italijanska","rostilj","sendvici","pohovano","palacinke"],
            ocena: 4.0,
            minCenaNarudzbine: 600  
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
            kategorije:["pica","roštilj","sendviči","slatke palačinke"],
            tagovi:["pica","pizza","italijanska","rostilj","sendvici","palacinke","slatke palacinke"],
            ocena: 4.0,
            minCenaNarudzbine: 500  
        },
        {
            id: 9,
            naziv: "Intergalactic Diner",
            adrese:[{
                grad: "Beograd",
                region: "Vračar",
                ulica: "Internacionalnih brigada",
                broj: "20"}],
            opis: "",
            logo: "../../assets/slike/restorani/intergalactic-diner/logo.png",
            cover: "../../assets/slike/restorani/intergalactic-diner/cover.png",
            obroci:[80,81,82,83,84],
            kategorije:["burgeri"],
            tagovi:["burgeri"],
            ocena: 4.7,
            minCenaNarudzbine: 900  
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
            kategorije:["mc-obrok","burgeri","pomfrit","šejkovi"],
            tagovi:["obrok","burgeri","pomfrit","sejkovi"],
            ocena: 4.1,
            minCenaNarudzbine: 600  
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
            kategorije:["piletina","svinjetina","teletina","desert"],
            tagovi:["piletina","svinjetina","teletina","desert","kineska"],
            ocena: 3.9,
            minCenaNarudzbine: 800  
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
            kategorije:["piletina","svinjetina","teletina","desert"],
            tagovi:["piletina","svinjetina","teletina","desert","kineska"],
            ocena: 4.4,
            minCenaNarudzbine: 800  
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
            kategorije:["giros"],
            tagovi:["giros"],
            ocena: 4.2,
            minCenaNarudzbine: 700  
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

    najboljiRestorani(n: number):Array<Restoran>{
        return this.restoranPodaci.sort((r1,r2)=>r2.ocena-r1.ocena).slice(0,n);
    }
}