import { Injectable } from '@angular/core';
import { Obrok } from '../models/obrok.model';

@Injectable({
    providedIn: 'root'
})

export class ObrokService {
    static obrokPodaci: Array<Obrok> = [];

    constructor() {}
    
}