import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class GradoviService {
    private gradRegion = {
        "Beograd": ["Autokomanda","Banjica","Banovo brdo","Barajevo","Bele vode",
        "Beograd","Borča","Braće Jerković","Cerak","Cerak vinogradi","Dedinje",
        "Dorćol","Dušanovac","Filmski grad","Jajinci","Kaluđerica","Kanarevo brdo",
        "Karaburma","Konjarnik","Kotež","Kovilovo","Krnjača","Kumodraž",
        "Labudovo brdo","Mali Mokri Lug","Medaković","Miljakovac I i II",
        "Miljakovac III","Mirijevo I","Mirijevo II,III i IV","Padinska Skela","Palilula",
        "Petlovo brdo","Rakovica","Resnik","Savski venac","Senjak","Sremčica","Stari grad",
        "Stepa Stepanović","Ušće","Velika Moštanica","Veliki Mokri Lug","Vidikovac","Višnjička banja",
        "Voždovac","Vračar","Žarkovo","Železnik","Zvezdara širi gradski deo","Zvezdara uži gradski deo"]
      };
    
    getGradRegion(){
        return this.gradRegion;
    }
    
    constructor() {}
    
}