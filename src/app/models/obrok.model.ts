export interface Obrok{
    id: number;
    naziv: string;
    slika: string;
    opis: string;
    kategorija: string;
    cena: number;
    dodaci: Array<number>;
    ocena: number;
}