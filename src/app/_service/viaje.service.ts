import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { ViajeCreate } from '../_model/viajeCreate';
import { Viaje } from '../_model/viaje';

@Injectable({ providedIn: 'root' })
export class ViajeService {
    constructor(private http: HttpClient) { }

    Create(viaje: ViajeCreate) {
        var user = localStorage.getItem('currentUser');
        user = JSON.parse(user);

        var reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user["token"]
         });

        return this.http.post(`https://localhost:44380/api/Viaje/Create`, viaje, { headers: reqHeader });
    }

    getAll() {

        var user = localStorage.getItem('currentUser');
        user = JSON.parse(user);

        var reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user["token"]
         });

        return this.http.get<Viaje[]>(`https://localhost:44380/api/Viaje/Create`, { headers: reqHeader });
    }

}