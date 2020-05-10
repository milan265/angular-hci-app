import { Injectable } from "@angular/core";
import { Restoran } from '../models/restoran.model';

@Injectable({
    providedIn: 'root'
})

export class RestoranService {
    static restoranPodaci: Array<Restoran> = [];

    constructor() {}
    
}