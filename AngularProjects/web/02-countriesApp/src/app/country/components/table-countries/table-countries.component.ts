import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-table-countries',
  templateUrl: './table-countries.component.html',
  styles: [
  ]
})
export class TableCountriesComponent implements OnInit {

  @Input() public countries: Country [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
