import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    public name: string = "Fco. Javier"
    public value: number = 1000;
    public object = {

        name: "Francisco Javier"
    }

    constructor( private PrimeNGConfig: PrimeNGConfig ) {

    }

    ngOnInit(): void { 
        
        this.PrimeNGConfig.ripple = true;
    }

    public showData(): void {

        console.log( this.name );
        console.log( this.value );
        console.log( this.object );
    }

}
