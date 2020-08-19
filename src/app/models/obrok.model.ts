export interface Obrok{
    id: number;
    naziv: string;
    slika?: string;
    opis: string;
    kategorija: string;
    tag?: Array<string>;
    cena: number;
    dodaci: Array<number>;
}