import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';

import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroeComponent } from './pages/heroe/heroe.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroesHomeComponent,
    HeroesListComponent,
    HeroeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
