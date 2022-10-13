import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';



const routes: Routes = [

    {
        path: '',
        component: HeroesHomeComponent,
        children: [
            {
                path: 'add',
                component: AddComponent
            },
            {
                path: 'edit/:id',
                component: AddComponent
            },
            {
                path: 'heroes-list',
                component: HeroesListComponent
            },
            {
                path: 'heroe-search',
                component: SearchComponent
            },
            {
                path: ':id',
                component: HeroeComponent
            },
            {
                path: '**',
                redirectTo: 'heroes-list'
            }
        ]
    }

]



@NgModule({
    declarations: [],
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild( routes ),
    ]
})
export class HeroesRoutingModule { }
