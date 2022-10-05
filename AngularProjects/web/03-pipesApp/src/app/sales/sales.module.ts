import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicsComponent } from './pages/basics/basics.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { OrderComponent } from './pages/order/order.component';

import { FlyPipe } from './pipes/fly.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    FlyPipe,
    OrderComponent,
    SortPipe,
    UppercasePipe,
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
