import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private apiURL: string = 'https://restcountries.com/v2';

    constructor( private http: HttpClient ) { }

    public searchCountry( searchTerm:string ): Observable<Country[]> {

        const url = `${ this.apiURL}/name/${ searchTerm }`;

        return this.http.get<Country[]>( url );

    }

    public searchCapital( searchTerm:string ): Observable<Country[]> {

        const url = `${ this.apiURL}/capital/${ searchTerm }`;

        return this.http.get<Country[]>( url );

    }

    getCountryByCode( searchTerm: string ): Observable<Country> {

        const url = `${ this.apiURL}/alpha/${ searchTerm }`;

        return this.http.get<Country>( url );

    }

    public searchRegion ( region: string ): Observable<Country[]> {

        const url = `${ this.apiURL}/region/${ region }`;

        return this.http.get<Country[]>( url );

    }
}
