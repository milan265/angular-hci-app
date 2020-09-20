import { Adresa } from './adresa.model';
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
    narudzbine?: Array<number>;
    omiljeniRestorani?: Array<number>;
    omiljenaHrana?: Array<number>;
    utisci?: Array<Utisak>;
}