export interface Narudzbina{
    id: number;
    korisnik: number;//id korisnika
    restoran: number;//id restorana
    obroci: Array<number>;
    datum: Date;
    iznos: number;
    komentar: string;
}