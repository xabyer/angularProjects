import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs,interface';

@Injectable({
    providedIn: 'root'
})
export class GifsService {

    private apiKey : string = '';
    private _historicalGifs: string [] = [];
    private urlService: string = 'https://api.giphy.com/v1/gifs';
    
    public results: Gif[] = [];
    
    constructor( private http: HttpClient ){

        
        this._historicalGifs = JSON.parse(localStorage.getItem('historical')!) || [];

        this.results = JSON.parse(localStorage.getItem('gifResults')!) || [];

    };

    public searchGifs ( query: string = '' ) {

        query = query.trim().toLowerCase();

        if( !this._historicalGifs.includes( query ) ) { 

            this._historicalGifs.unshift( query );

            this._historicalGifs = this._historicalGifs.splice( 0, 10 );

            localStorage.setItem( 'historical', JSON.stringify( this._historicalGifs ) );
            

        }

        const params = new HttpParams()
                .set('api_key', this.apiKey)
                .set('limit', '12')
                .set('q', query);

        this.http.get<SearchGifsResponse>(`${this.urlService}/search`, { params })
                .subscribe( ( response: SearchGifsResponse ) => {
                    
                    this.results = response.data;

                    localStorage.setItem('gifResults', JSON.stringify( this.results ));

                });
        
    }

    get historicalGifs (): string [] {
        
        return [...this._historicalGifs];
    }
  
}
