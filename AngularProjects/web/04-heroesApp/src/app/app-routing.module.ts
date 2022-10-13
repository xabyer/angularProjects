import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
    {
        path:'auth',
        loadChildren: () => import('./auth/auth.module').then( module => module.AuthModule )
    },
    {
        path: 'heroes',
        loadChildren: () => import('./heroes/heroes.module').then( module => module.HeroesModule )
    },
    {
        path: '404',
        component: ErrorPageComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }

]

@NgModule({
    declarations: [],
    exports: [
        RouterModule,
    ],
    imports: [
        RouterModule.forRoot( routes ),
    ]
})
export class AppRoutingModule { }
