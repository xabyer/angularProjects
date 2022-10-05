import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

	public nameLower: string = 'fco. javier';
	public nameUpper: string = 'FCO. JAVIER';
	public nameComplete: string = 'fraNcisCo jAvieR'

  public date: Date = new Date();
  
}
