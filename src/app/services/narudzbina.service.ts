import { Injectable } from "@angular/core";
import { Narudzbina } from '../models/narudzbina.model';

@Injectable({
    providedIn: 'root'
})

export class NarudzbinaService {
    static narudzbinaPodaci: Array<Narudzbina> = [];

    constructor() {}
    
}