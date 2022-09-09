import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

    constructor(private gifsSevice: GifsService) { }

    searchGifs (searchElement: string ) {
        this.gifsSevice.searchGifs( searchElement );
    }

    
    public get historical() {
        
        return this.gifsSevice.historicalGifs;
    }

}
