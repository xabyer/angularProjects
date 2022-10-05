import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styles: [
        `
            li {
                cursor: pointer;
            }
            li:hover {
                animation: heartBeat;
                animation-duration: 1s;
            }
        `
    ]
})
export class SidebarComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
