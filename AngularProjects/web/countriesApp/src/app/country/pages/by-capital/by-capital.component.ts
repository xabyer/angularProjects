import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-by-capital',
    templateUrl: './by-capital.component.html',
    styles: [
    ]
})
export class ByCapitalComponent {

    public searchTerm: string = '';
    public haveError: boolean = false;
    public countries: Country [] = [];

    constructor(private countryService: CountryService) { }

    public searchCountry ( searchTerm: string ): void {

        this.haveError = false;
        this.searchTerm = searchTerm;

        this.countryService.searchCapital( searchTerm )
            .subscribe({ 
                next: (response) =>{
                    
                    this.countries = response;
                    
                },
                error: (error) => {
                    this.haveError = true;
                    this.countries = [];
                }
                
            });        
        
    }

}
