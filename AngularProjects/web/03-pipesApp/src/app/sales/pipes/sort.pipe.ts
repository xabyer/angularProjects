import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interfaces';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform( heroes: Heroe[], sortBy: string = 'no value' ): Heroe[] {

        switch( sortBy ) {

            case 'name':
                return heroes.sort( ( heroe1, heroe2 ) => ( heroe1.name > heroe2.name ) ? 1 : -1 );
                break;
            
            case 'canFly':
                return heroes.sort( ( heroe1, heroe2 ) => ( heroe1.canFly > heroe2.canFly ) ? -1 : 1 );
                break;
            
            case 'color':
                return heroes.sort( ( heroe1, heroe2 ) => ( heroe1.color > heroe2.color ) ? 1 : -1 );
                break;

            default:
                return heroes;
        }
    }

}
