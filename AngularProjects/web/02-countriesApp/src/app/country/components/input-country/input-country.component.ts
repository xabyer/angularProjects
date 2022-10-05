import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
    selector: 'app-input-country',
    templateUrl: './input-country.component.html',
    styles: [
    ]
})
export class InputCountryComponent implements OnInit {
  

    @Output() onEnter: EventEmitter<string> = new EventEmitter();
    @Output() onDebounce : EventEmitter<string> = new EventEmitter();

    @Input() placeholder: string = '';

    public deboncer: Subject<string> = new Subject();

    public searchTerm: string = '';

    ngOnInit(): void {
        this.deboncer
                .pipe( debounceTime( 300 ) )
                .subscribe( value => {

                    this.onDebounce.emit( value );

                });
    }

    public searchCountry() {

        this.onEnter.emit( this.searchTerm );

    }

    public pressedKey( ) {

        this.deboncer.next( this.searchTerm );

    }
}
