import { Korpa } from './korpa.model';

export interface Narudzbina{
    id: number;
    restoranId: number;
    korpa: Array<Korpa>;
    datum: Date;
    komentar: string;
    sifra: string;
    korisnik: number;
    tip: "aktivna"|"otkazana"|"završena";
    ocenjena: boolean;
}