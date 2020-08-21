import { Injectable } from '@angular/core';
import { Obrok } from '../models/obrok.model';

@Injectable({
    providedIn: 'root'
})

export class ObrokService {
    private obrokPodaci: Array<Obrok> = [
        //grill 51
        {
            id: 1,
            naziv: "Pljeskavica",
            slika: "../../assets/slike/restorani/grill51/obroci/pljeskavica.png",
            opis: "200 grama. Roštilj meso. Somun",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 260,
            dodaci: [1,2,3,4,5,6,7,8,9,10],
        },
        {
            id: 2,
            naziv: "Susam pljeskavica",
            slika: "../../assets/slike/restorani/grill51/obroci/susam-pljeskavica.png",
            opis: "200 grama. Roštilj meso, susam. Somun",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 270,
            dodaci: [1,2,3,4,5,6,7,8,9,10]
        },
        {
            id: 3,
            naziv: "Gurmanska pljeskavica",
            slika: "../../assets/slike/restorani/grill51/obroci/gurmanska-pljeksavica.png",
            opis: "300 grama. Roštilj meso, kačkavalj, šunka. Somun",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 320,
            dodaci: [1,2,3,4,5,6,7,8,9,10]
        },
        {
            id: 4,
            naziv: "Punjena pljeskavica",
            slika: "../../assets/slike/restorani/grill51/obroci/punjena-pljeskavica.png",
            opis: "350 grama. Roštilj meso, kačkavalj, šunka. Somun",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 350,
            dodaci: [1,2,3,4,5,6,7,8,9,10]
        },
        {
            id: 5,
            naziv: "Šiš ćevap",
            slika: "../../assets/slike/restorani/grill51/obroci/sis-cevapa.png",
            opis: "150 grama. Roštilj meso. Somun",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 210,
            dodaci: [1,2,3,4,5,6,7,8,9,10]
        },
        {
            id: 6,
            naziv: "Ćevapi",
            slika: "../../assets/slike/restorani/grill51/obroci/cevapi.png",
            opis: "200 grama. Roštilj meso. Somun",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 260,
            dodaci: [1,2,3,4,5,6,7,8,9,10]
        },
        {
            id: 7,
            naziv: "Leskovački uštipak",
            slika: "../../assets/slike/restorani/grill51/obroci/leskovacki-ustipak.png",
            opis: "350 grama. Roštilj meso, kačkavalj, šunka, tucana paprika, luk. Somun",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 350,
            dodaci: [1,2,3,4,5,6,7,8,9,10],
        },
        {
            id: 8,
            naziv: "Bela vešalica",
            slika: "../../assets/slike/restorani/grill51/obroci/bela-vesalica.png",
            opis: "200 grama. Somun",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 300,
            dodaci: [1,2,3,4,5,6,7,8,9,10]
        },
        {
            id: 9,
            naziv: "Pileće belo",
            slika: "../../assets/slike/restorani/grill51/obroci/pilece-belo.png",
            opis: "200 grama. Pileći file. Somun",
            kategorija: "piletina",
            tag: ["rostilj","piletina"],
            cena: 290,
            dodaci: [1,2,3,4,5,6,7,8,9,10]
        },
        {
            id: 10,
            naziv: "Pileće belo punjeno",
            slika: "../../assets/slike/restorani/grill51/obroci/pilece-belo-punjeno.png",
            opis: "250 grama. Pileći file, kačkavalj, šunka. Somun",
            kategorija: "piletina",
            tag: ["rostilj","piletina"],
            cena: 330,
            dodaci: [1,2,3,4,5,6,7,8,9,10]
        },
        {
            id: 11,
            naziv: "Pileći batak",
            slika: "../../assets/slike/restorani/grill51/obroci/pileci-batak.png",
            opis: "200 grama. Pileći batak. Somun",
            kategorija: "piletina",
            tag: ["rostilj","piletina"],
            cena: 290,
            dodaci: [1,2,3,4,5,6,7,8,9,10]
        },
        {
            id: 12,
            naziv: "Pohovana kraljevska piletina",
            slika: "../../assets/slike/restorani/grill51/obroci/pohovana-kraljevska-piletina.png",
            opis: "Pileći file, pršuta, kačkavalj, susam. Somun",
            kategorija: "pohovano",
            tag: ["pohovano","piletina"],
            cena: 330,
            dodaci: [1,2,3,4,5,6,7,8,9,10]
        },
        {
            id: 13,
            naziv: "Pohovano pileće belo",
            slika: "../../assets/slike/restorani/grill51/obroci/pohovano-pilece-belo.png",
            opis: "200 grama. Pileći file. Somun",
            kategorija: "pohovano",
            tag: ["pohovano","piletina"],
            cena: 250,
            dodaci: [1,2,3,4,5,6,7,8,9,10]
        },
        {
            id: 14,
            naziv: "Pohovani kačkavalj",
            slika: "../../assets/slike/restorani/grill51/obroci/pohovani-kackavalj.png",
            opis: "Kačkavalj. tartar sos. Lepinja",
            kategorija: "pohovano",
            tag: ["pohovano","kackavalj"],
            cena: 250,
            dodaci: [1,2,3,4,5,6,7,8,9,10]
        },
        {
            id: 15,
            naziv: "Sendvič šunka",
            slika: "../../assets/slike/restorani/grill51/obroci/sendvic-sunka.png",
            opis: "Šunka, kačkavalj. Somun",
            kategorija: "sendviči",
            tag: ["sendvic"],
            cena: 190,
            dodaci: []
        },
        {
            id: 16,
            naziv: "Sendvič Pečenica",
            slika: "../../assets/slike/restorani/grill51/obroci/sendvic-pecenica.png",
            opis: "Dimljena pečenica, kačkavalj. Somun",
            kategorija: "sendviči",
            tag: ["sendvic"],
            cena: 200,
            dodaci: []
        },
        {
            id: 17,
            naziv: "Sendvič kulen",
            slika: "../../assets/slike/restorani/grill51/obroci/sendvic-kulen.png",
            opis: "Kulen, kačkavalj. Somun",
            kategorija: "sendviči",
            tag: ["sendvic"],
            cena: 220,
            dodaci: []
        },
        {
            id: 18,
            naziv: "Sendvič pršuta",
            slika: "../../assets/slike/restorani/grill51/obroci/sendvic-prsuta.png",
            opis: "Svinjska pršuta, kačkavalj. Somun",
            kategorija: "sendviči",
            tag: ["sendvic"],
            cena: 250,
            dodaci: []
        },
        {
            id: 19,
            naziv: "Pomfrit",
            slika: "../../assets/slike/restorani/grill51/obroci/pomfrit.png",
            opis: "250 grama",
            kategorija: "pomfrit",
            tag: ["pomfrit"],
            cena: 140,
            dodaci: [1,3]
        },
        {
            id: 20,
            naziv: "Domaćinski krompir",
            slika: "../../assets/slike/restorani/grill51/obroci/domacinski-krompiri.png",
            opis: "250 grama. Začinjene kriške krompira",
            kategorija: "pomfrit",
            tag: ["pomfrit"],
            cena: 160,
            dodaci: [1,3]
        },
        {
            id: 21,
            naziv: "Onion rings",
            slika: "../../assets/slike/restorani/grill51/obroci/onion-rings.png",
            opis: "150 grama. Panirani kolutići luka",
            kategorija: "pomfrit",
            tag: ["pomfrit"],
            cena: 160,
            dodaci: [1,3,5]
        },
        {
            id: 22,
            naziv: "Palačinka nutela",
            slika: "../../assets/slike/restorani/grill51/obroci/palacinka-nutela.png",
            opis: "",
            kategorija: "palačinke",
            tag: ["palacinke"],
            cena: 180,
            dodaci: [11,12,13,14,15,16,17,18,19]
        },
        {
            id: 23,
            naziv: "Palačinka snickers",
            slika: "../../assets/slike/restorani/grill51/obroci/palacinka-snickers.png",
            opis: "Nutela, kikiriki, toping karamela",
            kategorija: "palačinke",
            tag: ["palacinke"],
            cena: 240,
            dodaci: [13,14,15,16]
        },
        {
            id: 24,
            naziv: "Palačinka cipiripi",
            slika: "../../assets/slike/restorani/grill51/obroci/palacinka-cipiripi.png",
            opis: "Eurokrem, lešnik",
            kategorija: "palačinke",
            tag: ["palacinke"],
            cena: 220,
            dodaci: [13,14,15,16]
        },
        {
            id: 25,
            naziv: "Coca cola 0.5L",
            slika: "../../assets/slike/restorani/grill51/obroci/coca-cola-500ml.png",
            opis: "Flašica",
            kategorija: "piće",
            tag: ["sok","pice"],
            cena: 90,
            dodaci: []
        },
        {
            id: 26,
            naziv: "Coca cola 0.33L",
            slika: "../../assets/slike/restorani/grill51/obroci/coca-cola-330ml.png",
            opis: "Limenka",
            kategorija: "piće",
            tag: ["sok","pice"],
            cena: 90,
            dodaci: []
        },
        {
            id: 27,
            naziv: "Fanta orange 0.5L",
            slika: "../../assets/slike/restorani/grill51/obroci/fanta-orange-500ml.png",
            opis: "Flašica",
            kategorija: "piće",
            tag: ["sok","pice"],
            cena: 90,
            dodaci: []
        },
        //pile&prase
        {
            id: 28,
            naziv: "Pljeskavica",
            opis: "200 grama",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 280,
            dodaci: [7,20,21,22,4,8,1,3,2,23,9]
        },
        {
            id: 29,
            naziv: "Gurmanska pljeskavica",
            slika: "../../assets/slike/restorani/pile&prase/obroci/gurmanska-pljeskavica.png",
            opis: "260 grama",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 340,
            dodaci: [7,20,21,22,4,8,1,3,2,23,9]
        },
        {
            id: 30,
            naziv: "Crvena pljeskavica",
            slika: "../../assets/slike/restorani/pile&prase/obroci/crvena-pljeskavica.png",
            opis: "220 grama. Crvena tucana paprika, luk",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 280,
            dodaci: [7,20,21,22,4,8,1,3,2,23,9]
        },
        {
            id: 31,
            naziv: "Kobasica",
            slika: "../../assets/slike/restorani/pile&prase/obroci/kobasica.png",
            opis: "200 grama",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 300,
            dodaci: [7,20,21,22,4,8,1,3,2,23,9]
        },
        {
            id: 32,
            naziv: "Pileći file",
            slika: "../../assets/slike/restorani/pile&prase/obroci/pileci-file.png",
            opis: "200 grama",
            kategorija: "roštilj",
            tag: ["rostilj","piletina"],
            cena: 310,
            dodaci: [7,20,21,22,4,8,1,3,2,23,9]
        },
        {
            id: 33,
            naziv: "Palačinka nutela",
            opis: "",
            kategorija: "palačinke",
            tag: ["palacinke"],
            cena: 190,
            dodaci: []
        },
        {
            id: 34,
            naziv: "Palačinka nutela, plazma",
            slika: "../../assets/slike/restorani/pile&prase/obroci/palacinka-nutela-plazma.png",
            opis: "",
            kategorija: 'palačinke',
            tag: ["palacinke"],
            cena: 210,
            dodaci: []
        },
        {
            id: 35,
            naziv: "Pomfrit",
            opis: "200 grama",
            kategorija: 'ostalo',
            tag: ["pomfrit"],
            cena: 140,
            dodaci: [1,2,3,23]
        },
        {
            id: 36,
            naziv: "Lepinja",
            slika: "../../assets/slike/restorani/pile&prase/obroci/lepinja.png",
            opis: "",
            kategorija: "ostalo",
            cena: 35,
            dodaci: []
        },
        {
            id: 37,
            naziv: "Kajmak",
            slika: "../../assets/slike/restorani/pile&prase/obroci/kajmak.png",
            opis: "",
            kategorija: "ostalo",
            tag: ["salata"],
            cena: 60,
            dodaci: []
        },
        {
            id: 38,
            naziv: "Coca cola 0.33L",
            slika: "../../assets/slike/restorani/pile&prase/obroci/coca-cola-330ml.png",
            opis: "",
            kategorija: "piće",
            tag: ["sok","pice"],
            cena: 90,
            dodaci: []
        },
        {
            id: 39,
            naziv: "Fanta 0.33L",
            slika: "../../assets/slike/restorani/pile&prase/obroci/fanta-330ml.png",
            opis: "",
            kategorija: "piće",
            tag: ["sok","pice"],
            cena: 90,
            dodaci: []
        },
        //walter
        {
            id: 40,
            naziv: "Sarajevski ćevapi 5 komada",
            slika: "../../assets/slike/restorani/walter/obroci/sarajevski-cevapi-5-komada.png",
            opis: "125 grama. Juneće meso",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 230,
            dodaci: [24,3,1,4,7,9,8]
        },
        {
            id: 41,
            naziv: "Sarajevski ćevapi 10 komada",
            slika: "../../assets/slike/restorani/walter/obroci/sarajevski-cevapi-10-komada.png",
            opis: "250 grama. Juneće meso",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 460,
            dodaci: [24,3,1,4,7,9,8]
        },
        {
            id: 42,
            naziv: "Pljekavica mala porcija",
            slika: "../../assets/slike/restorani/walter/obroci/pljeksavica-mala-porcija.png",
            opis: "125 grama",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 230,
            dodaci: [24,3,1,4,7,9,8]
        },
        {
            id: 43,
            naziv: "Pljeskavica velika porcija",
            slika: "../../assets/slike/restorani/walter/obroci/pljeksavica-velika-porcija.png",
            opis: "250 grama",
            kategorija: "roštilj",
            tag: ["rostilj"],
            cena: 460,
            dodaci: [24,3,1,4,7,9,8]
        },
        {
            id: 44,
            naziv: "Pileći file",
            slika: "../../assets/slike/restorani/walter/obroci/pileci-file.png",
            opis: "250 grama",
            kategorija: "roštilj",
            tag: ["rostilj","piletina"],
            cena: 300,
            dodaci: [24,3,1,4,7,9,8]
        },
        {
            id: 45,
            naziv: "Pileće krpice na kajmaku",
            slika: "../../assets/slike/restorani/walter/obroci/pilece-krpice-na-kajmaku.png",
            opis: "300 grama. Pileće meso, kajmak, tucana paprika",
            kategorija: "roštilj",
            tag: ["rostilj","piletina"],
            cena: 400,
            dodaci: [24,3,1,4,7,9,8]
        },
        {
            id: 46,
            naziv: "Biftek",
            slika: "../../assets/slike/restorani/walter/obroci/biftek.png",
            opis: "250 grama. Juneće meso",
            kategorija: "roštilj",
            tag: ["rostilj","junetina"],
            cena: 950,
            dodaci: [24,3,1,4,7,9,8]
        },
        {
            id: 47,
            naziv: "Kupus salata",
            slika: "../../assets/slike/restorani/walter/obroci/kupus-salata.png",
            opis: "200 grama",
            kategorija: "salate",
            tag: ["salata"],
            cena: 140,
            dodaci: []
        },
        {
            id: 48,
            naziv: "Paradajz salata",
            slika: "../../assets/slike/restorani/walter/obroci/paradajz-salata.png",
            opis: "200 grama",
            kategorija: "salate",
            tag: ["salata"],
            cena: 170,
            dodaci: []
        },
        {
            id: 49,
            naziv: "Krastavac salata",
            slika: "../../assets/slike/restorani/walter/obroci/krastavac-salata.png",
            opis: "200 grama",
            kategorija: "salate",
            tag: ["salata"],
            cena: 170,
            dodaci: []
        },
        {
            id: 50,
            naziv: "Pomfrit",
            slika: "../../assets/slike/restorani/walter/obroci/pomfrit.png",
            opis: "200 grama",
            kategorija: "pomfrit",
            tag: ["pomfrit"],
            cena: 140,
            dodaci: []
        },
        {
            id: 51,
            naziv: "Palačinke sa eurokremom",
            opis: "",
            kategorija: "palačinke",
            tag: ["palacinke"],
            cena: 240,
            dodaci: []
        },
        {
            id: 52,
            naziv: "Palačinke sa džemom",
            opis: "",
            kategorija: "palačinke",
            tag: ["palacinke"],
            cena: 240,
            dodaci: []
        },
        {
            id: 53,
            naziv: "Coca cola 0.33L",
            slika: "../../assets/slike/restorani/walter/obroci/coca-cola-330ml.png",
            opis: "",
            kategorija: "piće",
            tag: ["sok","pice"],
            cena: 100,
            dodaci: []
        },
        {
            id: 54,
            naziv: "Fanta 0.5L",
            slika: "../../assets/slike/restorani/walter/obroci/fanta-500ml.png",
            opis: "",
            kategorija: "piće",
            tag: ["sok","pice"],
            cena: 120,
            dodaci: []
        },
        //BigPizza
        {
            id: 55,
            naziv: "Kaprićoza",
            slika: "../../assets/slike/restorani/big-pizza/obroci/kapricoza.png",
            opis: "Pelat, sir, šunka, pečurke",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 540,
            dodaci: [25,26,27,1,3,4]
        },
        {
            id: 56,
            naziv: "Karbonara pica",
            slika: "../../assets/slike/restorani/big-pizza/obroci/karbonaro-pica.png",
            opis: "Kisela pavlaka, biber, beli luk, pečurke, slanina, sir.",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 540,
            dodaci: [25,26,27,1,3,4]
        },
        {
            id: 57,
            naziv: "Vezuvio",
            slika: "../../assets/slike/restorani/big-pizza/obroci/vezuvio.png",
            opis: "Pelat, sir, šunka",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 540,
            dodaci: [25,26,27,1,3,4]
        },
        {
            id: 58,
            naziv: "Margarita",
            slika: "../../assets/slike/restorani/big-pizza/obroci/margarita.png",
            opis: "Sir, pelat, paradajz, parmezan, bosiljak, maslinovo ulje",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 500,
            dodaci: [28,29,30,1,3,4]
        },
        {
            id: 59,
            naziv: "Meksikana",
            slika: "../../assets/slike/restorani/big-pizza/obroci/meksikana.png",
            opis: "Pelat, sir, crveni luk, margarin, kulen, meksička ljuta paprika",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 650,
            dodaci: [31,32,33,1,3,4]
        },
        {
            id: 60,
            naziv: "Peperoni",
            slika: "../../assets/slike/restorani/big-pizza/obroci/peperoni.png",
            opis: "Pelat, sir, kulen",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 540,
            dodaci: [25,26,27,1,3,4]
        },
        {
            id: 61,
            naziv: "Vegetarijana",
            slika: "../../assets/slike/restorani/big-pizza/obroci/vegetarijana.png",
            opis: "Pelat, mocarela, bebi spanać, feta, paprika miks, paradajz, pečurke, ljubičasti luk",
            kategorija: "pica",
            tag: ["pica","italijanska","vegetarijanska"],
            cena: 500,
            dodaci: [28,29,30,1,3,4]
        },
        //brooklyn-pizza
        {
            id: 62,
            naziv: "Kaprićoza",
            slika: "../../assets/slike/restorani/brooklyn-pizza/obroci/kapricoza.png",
            opis: "Italijanski pelat, sir, šunka, pečurke, origano",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 680,
            dodaci: [1,3,4,35]
        },
        {
            id: 63,
            naziv: "Margarita",
            slika: "../../assets/slike/restorani/brooklyn-pizza/obroci/margarita.png",
            opis: "Italijanski pelat, sir, maslina, origano",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 580,
            dodaci: [1,3,4,35]
        },
        {
            id: 64,
            naziv: "Mediteran pica",
            slika: "../../assets/slike/restorani/brooklyn-pizza/obroci/mediteran-pica.png",
            opis: "Italijanski pelat, sir, svež paradajz, sveža paprika, feta sir, masline, origano",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 770,
            dodaci: [1,3,4,35]
        },
        {
            id: 65,
            naziv: "Fungi",
            slika: "../../assets/slike/restorani/brooklyn-pizza/obroci/fungi.png",
            opis: "Italijanski pelat, sir, pečurke, maslina, origano",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 630,
            dodaci: [1,3,4,35]
        },
        {
            id: 66,
            naziv: "Vegetarijana",
            slika: "../../assets/slike/restorani/brooklyn-pizza/obroci/vegetarijana.png",
            opis: "Pelat, sir, pečurke, paprika, masline, paradajz",
            kategorija: "pica",
            tag: ["pica","italijanska","vegetarijanska"],
            cena: 680,
            dodaci: [1,3,4,35]
        },
        {
            id: 67,
            naziv: "Vezuvio",
            slika: "../../assets/slike/restorani/brooklyn-pizza/obroci/vezuvio.png",
            opis: "Italijanski pelat, sir, šunka, origano",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 670,
            dodaci: [1,3,4,35]
        },
        //Napoli
        {
            id: 68,
            naziv: "Margarita",
            opis: "Pelat, kačkavalj, parmezan, masline, origano",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 387,
            dodaci: [1,3,4,35]
        },
        {
            id: 69,
            naziv: "Fungi",
            opis: "Pelat, kačkavalj, pečurke, masline, origano",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 397,
            dodaci: [1,3,4,35]
        },
        {
            id: 70,
            naziv: "Vezuvio",
            opis: "Pelat, kačkavalj, šunka, masline, origano",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 417,
            dodaci: [1,3,4,35]
        },
        {
            id: 71,
            naziv: "Vegetarijana",
            opis: "Pelat, biljni kačkavalj, pečurke, paradajz, tikvice, masline, origano",
            kategorija: "pica",
            tag: ["pica","italijanska","vegetarijanska"],
            cena: 417,
            dodaci: [1,3,4,35]
        },
        //kasper
        {
            id: 72,
            naziv: "Margarita",
            opis: "Pelat, origano, kačkavalj",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 470,
            dodaci: [1,3,4,35]
        },
        {
            id: 73,
            naziv: "Vezuvio",
            opis: "Pelat, kačkavalj, pečurke, origano",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 490,
            dodaci: [1,3,4,35]
        },
        {
            id: 74,
            naziv: "Kaprićoza",
            opis: "Pelat, kačkavalj, šunka, pečurke, origano, masline",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 530,
            dodaci: [1,3,4,35]
        },
        {
            id: 75,
            naziv: "Vegetarijana",
            opis: "Pelat, sezonsko povrće, kačkavalj, masline, origano",
            kategorija: "pica",
            tag: ["pica","italijanska","vegetarijanska"],
            cena: 510,
            dodaci: [1,3,4,35]
        },
        //madness
        {
            id: 76,
            naziv: "Margarita",
            opis: "Pelat, kačkavalj, masline, origano",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 490,
            dodaci: [1,3,4,35]
        },
        {
            id: 77,
            naziv: "Vezuvio",
            opis: "Pelat, kačkavalj, šunka, masline, origano",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 570,
            dodaci: [1,3,4,35]
        },
        {
            id: 78,
            naziv: "Kaprićoza",
            opis: "Pelat, kačkavalj, šunka, pečurke, origano, masline",
            kategorija: "pica",
            tag: ["pica","italijanska"],
            cena: 600,
            dodaci: [1,3,4,35]
        },
        {
            id: 79,
            naziv: "Vegetarijana",
            opis: "Pelat, mešano povrće, pečurke, kačkavalj, masline, origano",
            kategorija: "pica",
            tag: ["pica","italijanska","vegetarijanska"],
            cena: 570,
            dodaci: [1,3,4,35]
        },
        //intergalactic
        {
            id: 80,
            naziv: "Classic dog",
            slika: "../../assets/slike/restorani/intergalactic-diner/obroci/classic-dog.png",
            opis: "Roštiljska juneća kobasica, grilovani crveni luk, ajsberg, balzamiko sos",
            kategorija: "burgeri",
            tag: ["burgeri", "junetina"],
            cena: 385,
            dodaci: []
        },
        {
            id: 81,
            naziv: "Comet dog",
            slika: "../../assets/slike/restorani/intergalactic-diner/obroci/comet-dog.png",
            opis: "Roštiljska juneća kobasica, majonez, blagi senf, Heinz kečap, mocarela, ajsberg",
            kategorija: "burgeri",
            tag: ["burgeri", "junetina"],
            cena: 395,
            dodaci: []
        },
        {
            id: 82,
            naziv: "Classic bacon",
            slika: "../../assets/slike/restorani/intergalactic-diner/obroci/classic-bacon.png",
            opis: "Grilovani pileći file, ajsberg, paradajz, majonez, Heinz kečap, čedar sir, grilovana slaninica",
            kategorija: "burgeri",
            tag: ["burgeri", "piletina"],
            cena: 435,
            dodaci: []
        },
        {
            id: 83,
            naziv: "Classic chicken",
            slika: "../../assets/slike/restorani/intergalactic-diner/obroci/classic-chicken.png",
            opis: "Grilovani pileći file, ajsberg, paradajz, majonez, Heinz kečap, čedar sir",
            kategorija: "burgeri",
            tag: ["burgeri", "piletina"],
            cena: 395,
            dodaci: []
        },
        {
            id: 84,
            naziv: "Eden burger",
            slika: "../../assets/slike/restorani/intergalactic-diner/obroci/eden-burger.png",
            opis: "Prženi vegetarijanski burger, paradajz, krastavac, ajsberg, crveni luk, Heinz kečap",
            kategorija: "burgeri",
            tag: ["burgeri", "vegetarijanska"],
            cena: 485,
            dodaci: []
        },
        //mcdonalds
        {
            id: 85,
            naziv: "2 X Cheeseburger obrok",
            slika: "../../assets/slike/restorani/mcdonalds/obroci/2xcheeseburger-obrok.png",
            opis: "2 X Cheeseburger, veliki pomfrit ili mala salata, piće",
            kategorija: "mc-obrok",
            tag: ["burgeri","obrok"],
            cena: 610,
            dodaci: []
        },
        {
            id: 86,
            naziv: "Big Mac obrok",
            slika: "../../assets/slike/restorani/mcdonalds/obroci/big-mac-obrok.png",
            opis: "Big Mac, veliki pomfrit ili mala salata, piće",
            kategorija: "mc-obrok",
            tag: ["burgeri","obrok"],
            cena: 610,
            dodaci: []
        },
        {
            id: 87,
            naziv: "Big Mac burger",
            slika: "../../assets/slike/restorani/mcdonalds/obroci/big-mac-burger.png",
            opis: "Sveža zemička sa susamom, meso 100% govedina, kiseli krastavac, topljeni sir",
            kategorija: "burgeri",
            tag: ["burgeri","junetina"],
            cena: 380,
            dodaci: []
        },
        {
            id: 88,
            naziv: "Dupli Cheeseburger",
            slika: "../../assets/slike/restorani/mcdonalds/obroci/dupli-cheeseburger.png",
            opis: "Sveža zemička, 100% goveđe meso, topljeni sir, senf, kiseli krastavci",
            kategorija: "burgeri",
            tag: ["burgeri","junetina"],
            cena: 350,
            dodaci: []
        },
        {
            id: 89,
            naziv: "Triple Cheeseburger",
            slika: "../../assets/slike/restorani/mcdonalds/obroci/triple-cheeseburger.png",
            opis: "Sveža zemička, tri reda mesa od 100% govedine, topljeni sir, senf, kiseli krastavac, kečap, luk",
            kategorija: "burgeri",
            tag: ["burgeri","junetina"],
            cena: 430,
            dodaci: []
        },
        {
            id: 90,
            naziv: "Cheeseburger",
            slika: "../../assets/slike/restorani/mcdonalds/obroci/cheeseburger.png",
            opis: "Sveža zemička, 100% goveđe meso, sočni topljeni sir, senf, kiseli krastavci, kečap, luk",
            kategorija: "burgeri",
            tag: ["burgeri","junetina"],
            cena: 180,
            dodaci: []
        },
        {
            id: 91,
            naziv: "Chickenburger",
            slika: "../../assets/slike/restorani/mcdonalds/obroci/chickenburger.png",
            opis: "Sveža zemička, pileće panirano meso, pikantni sos sa hrskavom iceberg salatom",
            kategorija: "burgeri",
            tag: ["burgeri","piletina"],
            cena: 180,
            dodaci: []
        },
        {
            id: 92,
            naziv: "Junior pomfrit",
            slika: "../../assets/slike/restorani/mcdonalds/obroci/junior-pomfrit.png",
            opis: "",
            kategorija: "pomfrit",
            tag: ["pomfrit"],
            cena: 160,
            dodaci: []
        },
        {
            id: 93,
            naziv: "Srednji pomfrit",
            slika: "../../assets/slike/restorani/mcdonalds/obroci/srednji-pomfrit.png",
            opis: "",
            kategorija: "pomfrit",
            tag: ["pomfrit"],
            cena: 180,
            dodaci: []
        },
        {
            id: 94,
            naziv: "Veliki pomfrit",
            slika: "../../assets/slike/restorani/mcdonalds/obroci/veliki-pomfrit.png",
            opis: "",
            kategorija: "pomfrit",
            tag: ["pomfrit"],
            cena: 190,
            dodaci: []
        },
        {
            id: 95,
            naziv: "Šejk čokolada mali",
            slika: "../../assets/slike/restorani/mcdonalds/obroci/sejk-cokolada-mali.png",
            opis: "",
            kategorija: "šejkovi",
            tag: ["sejkovi"],
            cena: 160,
            dodaci: []
        },
        {
            id: 96,
            naziv: "Šejk čokolada veliki",
            slika: "../../assets/slike/restorani/mcdonalds/obroci/sejk-cokolada-veliki.png",
            opis: "",
            kategorija: "šejkovi",
            tag: ["sejkovi"],
            cena: 180,
            dodaci: []
        },
        {
            id: 97,
            naziv: "Šejk vanila mali",
            slika: "../../assets/slike/restorani/mcdonalds/obroci/sejk-vanila-mali.png",
            opis: "",
            kategorija: "šejkovi",
            tag: ["sejkovi"],
            cena: 160,
            dodaci: []
        },
        {
            id: 98,
            naziv: "Šejk vanila veliki",
            slika: "../../assets/slike/restorani/mcdonalds/obroci/sejk-vanila-veliki.png",
            opis: "",
            kategorija: "šejkovi",
            tag: ["sejkovi"],
            cena: 180,
            dodaci: []
        },
        //giros kod bucka
        {
            id: 99,
            naziv: "Mali giros",
            slika: "../../assets/slike/restorani/giros-kod-bucka/obroci/mali-giros.png",
            opis: "250 grama. Pileće meso, pomfrit, tortilja",
            kategorija: "giros",
            tag: ["giros"],
            cena: 260,
            dodaci: []
        },
        {
            id: 100,
            naziv: "Veliki giros",
            slika: "../../assets/slike/restorani/giros-kod-bucka/obroci/veliki-giros.png",
            opis: "400 grama. Pileće meso, pomfrit, tortilja",
            kategorija: "giros",
            tag: ["giros"],
            cena: 320,
            dodaci: []
        },
        {
            id: 101,
            naziv: "Džambo giros",
            slika: "../../assets/slike/restorani/giros-kod-bucka/obroci/dzambo-giros.png",
            opis: "500 grama. Pileće meso, pomfrit, tortilja",
            kategorija: "giros",
            tag: ["giros"],
            cena: 380,
            dodaci: []
        },
        {
            id: 102,
            naziv: "Giros velika porcija",
            slika: "../../assets/slike/restorani/giros-kod-bucka/obroci/giros-velika-porcija.png",
            opis: "250 grama pilećeg mesa, pomfrit, tortilja",
            kategorija: "giros",
            tag: ["giros"],
            cena:450 ,
            dodaci: []
        },
        {
            id: 103,
            naziv: "Giros džambo porcija",
            slika: "../../assets/slike/restorani/giros-kod-bucka/obroci/giros-dzambo-porcija.png",
            opis: "300 grama pilećeg mesa, pomfrit, tortilja",
            kategorija: "giros",
            tag: ["giros"],
            cena: 550,
            dodaci: []
        },
        //black white
        {
            id: 104,
            naziv: "Piletina sa kikirikijem i povrćem",
            slika: "../../assets/slike/restorani/black-white/obroci/piletina-sa-kikirikijem-i-povrcem.png",
            opis: "",
            kategorija: "piletina",
            tag: ["kineska","piletina"],
            cena: 350,
            dodaci: []
        },
        {
            id: 105,
            naziv: "Piletina u slatko kiselo tomato sosu",
            slika: "../../assets/slike/restorani/black-white/obroci/piletina-u-slatko-kiselom-tomato-sosu.png",
            opis: "",
            kategorija: "piletina",
            tag: ["kineska","piletina"],
            cena: 370,
            dodaci: []
        },
        {
            id: 106,
            naziv: "Svinjetina na usijanom tiganju",
            slika: "../../assets/slike/restorani/black-white/obroci/svinjetina-na-usijanom-tiganju.png",
            opis: "",
            kategorija: "svinjetina",
            tag: ["kineska","svinjetina"],
            cena: 400,
            dodaci: []
        },
        {
            id: 107,
            naziv: "Teletina na usijanom tiganju",
            slika: "../../assets/slike/restorani/black-white/obroci/teletina-na-usijanom-tiganju.png",
            opis: "",
            kategorija: "teletina",
            tag: ["kineska","teletina"],
            cena: 400,
            dodaci: []
        },
        {
            id: 108,
            naziv: "Pohovana banana",
            slika: "../../assets/slike/restorani/black-white/obroci/pohovana-banana.png",
            opis: "",
            kategorija: "desert",
            tag: ["kineska","desert"],
            cena: 170,
            dodaci: []
        },
        {
            id: 109,
            naziv: "Pohovana čokolada",
            slika: "../../assets/slike/restorani/black-white/obroci/pohovana-cokolada.png",
            opis: "",
            kategorija: "desert",
            tag: ["kineska","desert"],
            cena: 200,
            dodaci: []
        },
        {
            id: 110,
            naziv: "Pohovani sladoled od čokolade",
            slika: "../../assets/slike/restorani/black-white/obroci/pohovani-sladoled-od-cokolade.png",
            opis: "",
            kategorija: "desert",
            tag: ["kineska","desert"],
            cena: 200,
            dodaci: []
        },
        //soya sos
        {
            id: 111,
            naziv: "Piletina sa povrćem u soja sosu",
            opis: "",
            kategorija: "piletina",
            tag: ["kineska","piletina"],
            cena: 350,
            dodaci: []
        },
        {
            id: 112,
            naziv: "Piletina sa šampinjonima u soja sosu",
            opis: "",
            kategorija: "piletina",
            tag: ["kineska","piletina"],
            cena: 390,
            dodaci: []
        },
        {
            id: 113,
            naziv: "Svinjetina sa povrćem u soja sosu",
            opis: "",
            kategorija: "svinjetina",
            tag: ["kineska","svinjetina"],
            cena: 350,
            dodaci: []
        },
        {
            id: 114,
            naziv: "Svinjetina sa šampinjonima u soja sosu",
            opis: "",
            kategorija: "svinjetina",
            tag: ["kineska","svinjetina"],
            cena: 390,
            dodaci: []
        },
        {
            id: 115,
            naziv: "Pohovana banana",
            opis: "",
            kategorija: "desert",
            tag: ["kineska","desert"],
            cena: 180,
            dodaci: []
        }

    ];

    constructor() {}

    getObrokById(id: number):Obrok{
        return this.obrokPodaci.find(obrok => obrok.id == id);
    }

    getNazivById(id: number):string{
        return this.obrokPodaci.find(obrok => obrok.id == id).naziv;
    } 

    getOpisById(id: number):string{
        return this.obrokPodaci.find(obrok => obrok.id == id).opis;
    }

    getKategorijaById(id: number):string{
        return this.obrokPodaci.find(obrok => obrok.id == id).kategorija;
    }

    getTagById(id: number):Array<string>{
        return this.obrokPodaci.find(obrok => obrok.id == id).tag;
    } 

    getCenaById(id: number):number{
        return this.obrokPodaci.find(obrok => obrok.id == id).cena;
    } 

    getDodaciById(id: number):Array<number>{
        return this.obrokPodaci.find(obrok => obrok.id == id).dodaci;
    } 
}