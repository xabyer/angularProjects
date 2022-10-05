import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-see-country',
    templateUrl: './see-country.component.html',
    styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {

    public country!: Country;
    

    constructor( 
        private activatedRoute: ActivatedRoute,
        private countryService: CountryService

    ) { }

    ngOnInit(): void {
        
        this.activatedRoute.params
            .pipe(
                switchMap( ( {countryCode} ) => this.countryService.getCountryByCode( countryCode ) ),
                tap( console.log )
            )
            .subscribe ( country => this.country = country );
    }

}
