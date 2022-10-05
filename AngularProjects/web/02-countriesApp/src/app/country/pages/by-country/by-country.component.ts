import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
    selector: 'app-by-country',
    templateUrl: './by-country.component.html',
    styles: [
        `
            li {
                cursor: pointer;
            }
            a:hover {
                animation: bounceInRight;
            }
        `
    ]
})
export class ByCountryComponent {
  
    public searchTerm: string = '';
    public haveError: boolean = false;
    public countries: Country [] = [];

    public suggestedCountries: Country [] = [];
    public showSuggestions: boolean = false;

    constructor(private countryService: CountryService) { }

    public searchCountry ( searchTerm: string ): void {

        this.showSuggestions = false;
        this.haveError = false;
        this.searchTerm = searchTerm;

        this.countryService.searchCountry( searchTerm )
            .subscribe({ 
                next: (response) =>{
                    console.log(response);
                    this.countries = response;
                    
                },
                error: (error) => {
                    this.haveError = true;
                    this.countries = [];
                }
                
            });        
        
    }

    public suggestionsWords ( searchTerm: string ) {

        this.haveError = false;
        this.searchTerm = searchTerm;
        this.showSuggestions = true;
        
        this.countryService.searchCountry (searchTerm)
            .subscribe( { 
                next: (countries) =>{
                    this.suggestedCountries = countries.splice(0, 5)
                    
                },
                error: (err) => {
                    this.suggestedCountries = []
                 }
            });

    }

    public searchSuggested ( searchTerm: string) {
        
        this.searchCountry( searchTerm );

    }

  
}
