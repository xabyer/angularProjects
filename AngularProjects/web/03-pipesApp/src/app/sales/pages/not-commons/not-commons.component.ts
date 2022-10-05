import { Component, OnInit } from '@angular/core';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

    // i18nSelect
    public name: string = 'Marta';
    public gender: string = 'female';

    public mapInvitation = {
        'male': 'invitarlo',
        'female': 'invitarla'
    }

    // i18nPlural
    public clients: string[] = ['Maria', 'John', 'Peter', 'Mia', 'Esther'];
    public mapClients = {

        '=0': "we haven't any client waiting.",
        '=1': "we have one client waiting.",
        '=2': "we have two clients waiting.",
        'other': "we have # clients waiting."

    }

    changeClient(): void {
        if (this.name === 'Marta' && this.gender === 'female'){

            this.name = 'Juan';
            this.gender = 'male';
        
        } else {
            this.name = 'Marta';
            this.gender = 'female';
        }
    }

    eraseClient(): void {
        
        this.clients.pop();

    }


    //KeyValue Pipe
    
    public person: object = {

        name: 'Fco. Javier',
        age: 41,
        address: 'Un lugar de la mancha de cuyo nombre no quiero acordarme.'
    }

    //Json Pipe
    public cities = [
        {
            name: 'Madrid',
            isCountryCapital: true

        },
        {
            name: 'Barcelona',
            isCountryCapital: false

        },
        {
            name: 'Paris',
            isCountryCapital: true

        },
    ]

    //Async pipe
    myObservable = interval(1000);

    promiseValue = new Promise( (resolve, reject) => {

        setTimeout( () => {

            resolve('Promise Data');

        }, 3500);

    });

}
