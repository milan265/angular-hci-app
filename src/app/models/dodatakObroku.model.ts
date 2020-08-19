export interface DodatakObroku{
    id: number;
    naziv: string;
    naslovDodatka: string,
    cena: number;
    dodatak: boolean; //true-sabira se sa cenom, false-nova cena
    visestrukiIzbor: boolean;
}