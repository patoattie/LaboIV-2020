import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }

    public get(url = 'https://restcountries.eu/rest/v2/region/europe') {

        return this.http.get<Array<any>>(url);
    }
}
