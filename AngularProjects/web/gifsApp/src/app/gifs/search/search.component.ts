import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: [
    ]
})
export class SearchComponent {

    constructor ( private gifsSevice: GifsService ) {}

    @ViewChild( 'textSearch' ) textSearch!: ElementRef<HTMLInputElement>;

    public searchGif():void {
        
        const searchTextValue = this.textSearch.nativeElement.value;

        if ( searchTextValue.trim().length === 0 ) return;
        
        this.gifsSevice.searchGifs( searchTextValue );
        
        this.textSearch.nativeElement.value = '';
    }

  

}
