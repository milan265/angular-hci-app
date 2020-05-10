import { Adresa } from './adresa.model';
import { Obrok } from './obrok.model';

export interface Restoran{
    id: number;
    naziv: string;
    adrese: Array<Adresa>;
    opis: string;
    logo: string;
    obroci: Array<Obrok>;
    ocena: number;
}