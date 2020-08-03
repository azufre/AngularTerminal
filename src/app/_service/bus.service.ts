import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Bus } from '../_model/bus';

@Injectable({ providedIn: 'root' })
export class BusService {
    constructor(private http: HttpClient) { }

    Create(bus: Bus) {
        var user = localStorage.getItem('currentUser');
        user = JSON.parse(user);

        var reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user["token"]
         });

        return this.http.post(`https://localhost:44380/api/Bus/Create`, bus, { headers: reqHeader });
    }

}