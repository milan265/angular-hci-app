import { Adresa } from './adresa.model';
import { Utisak } from './utisak.model';

export interface Restoran{
    id: number;
    naziv: string;
    adrese: Array<Adresa>;
    opis?: string;
    logo: string;
    cover: string;
    obroci: Array<number>;
    utisci?: Array<Utisak>;
    kategorije: Array<string>;
    tagovi: Array<string>;
    minCenaNarudzbine: number;
    mapa?: string;
}