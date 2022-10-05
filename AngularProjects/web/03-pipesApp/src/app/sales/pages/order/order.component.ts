import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

    public isUpperCase: boolean = true;

    public sortBy: string = '';

    public heroes: Heroe[] = [
        {
            name: 'Superman',
            canFly: true,
            color: Color.blue
        },
        {
            name: 'Batman',
            canFly: false,
            color: Color.black
        },
        {
            name: 'Robin',
            canFly: false,
            color: Color.green
        },
        {
            name: 'Daredevil',
            canFly: false,
            color: Color.red
        },
        {
            name: 'Green Lantern',
            canFly: true,
            color: Color.green
        },
    ]

    
    toggleUpperLowerCase(): void {

        this.isUpperCase = !this.isUpperCase;
    }

    changeOrder( sortValue: string) {
        
        this.sortBy = sortValue;

    }

}
