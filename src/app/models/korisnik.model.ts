import { Adresa } from './adresa.model';
import { Narudzbina } from './narudzbina.model';
import { Utisak } from './utisak.model';

export interface Korisnik{
    id: number;
    ime: string;
    prezime: string;
    email: string;
    lozinka: string;
    telefon: string;
    datumRegistrovanja: Date;
    adrese: Array<Adresa>;
    narudzbine?: Array<Narudzbina>;
    omiljeniRestorani?: Array<number>;
    omiljenaHrana?: Array<number>;
    utisci?: Array<Utisak>;
}