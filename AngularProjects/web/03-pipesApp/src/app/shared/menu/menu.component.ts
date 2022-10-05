import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styles: [
    ]
})
export class MenuComponent implements OnInit {

    public items: MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {

        this.items = [
            {
                label: 'Angular Pipes',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Texts and Dates',
                        icon: 'pi pi-align-left',
                        routerLink: '/'
                    },
                    {
                        label: 'Numbers',
                        icon: 'pi pi-dollar',
                        routerLink: 'numbers'
                    },
                    {
                        label: 'Not commons',
                        icon: 'pi pi-globe',
                        routerLink: 'not-commons'
                    },
                ]
            },
            {
                label: 'Custom Pipes',
                icon: 'pi pi-cog',
                routerLink: 'order'
            }
        ];
    }
  

}
