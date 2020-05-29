import { Adresa } from './adresa.model';
import { Narudzbina } from './narudzbina.model';
import { Kartice } from './kartice.model';
import { Utisak } from './utisak.model';

export interface Korisnik{
    id: number;
    ime: string;
    prezime: string;
    korisnickoIme: string;
    email: string;
    lozinka: string;
    telefon: string;
    datumRegistrovanja: Date;
    adrese: Array<Adresa>;
    narudzbine?: Array<Narudzbina>;
    kartice?: Array<Kartice>; 
    omiljeniRestorani?: Array<number>;
    omiljenaHrana?: Array<number>;
    utisci?: Array<Utisak>;
}