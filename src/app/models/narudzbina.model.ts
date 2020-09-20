export interface Narudzbina{
    id: number;
    restoran: number;//id restorana
    obroci: Array<number>;
    datum: Date;
    iznos: number;
    komentar: string;
    sifra: string;
    korisnik: number;
}