import { NgModule } from '@angular/core';

import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { Route, RouterModule } from '@angular/router';
import { NotCommonsComponent } from './sales/pages/not-commons/not-commons.component';
import { OrderComponent } from './sales/pages/order/order.component';


const routes: Route[] = [
    {
        path: '',
        component: BasicsComponent,
        pathMatch: 'full'
    },
    {
        path: 'numbers',
        component: NumbersComponent
    },
    {
        path: 'not-commons',
        component: NotCommonsComponent
    },
    {
        path: 'order',
        component: OrderComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [],
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot( routes )
    ],
})
export class AppRouterModule { }
