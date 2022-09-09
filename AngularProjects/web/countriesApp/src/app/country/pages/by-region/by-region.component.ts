import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-by-region',
    templateUrl: './by-region.component.html',
    styles: [
        `
        button {
            margin-right: 2%;
            margin-top: 10px;
            color: antiquewhite;
        }
        `
    ]
})
export class ByRegionComponent {

    public regions: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
    public activeRegion: string = '';
    public countries: Country[] = [];

    constructor( private countryService: CountryService ) { }

    getClassCSS (region: string): string {

        return ( (this.activeRegion === region) ? 'btn btn-dark' : 'btn-outline-dark' );
    }

    public activateRegion ( region: string ):void {

        if( region === this.activeRegion ) return;

        this.activeRegion = region;
        this.countries = [];

        this.countryService.searchRegion( region )
                .subscribe( countries => this.countries = countries );

    }



    
}
