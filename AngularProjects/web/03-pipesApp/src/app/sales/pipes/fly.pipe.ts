import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canfly'
})

export class FlyPipe implements PipeTransform {

    transform(canFly: boolean): string {
        return (canFly) ? 'can fly' : 'can not fly';
    }

}