import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NinaHomePageComponent } from './landing/pages/nina-home-page/nina-home-page.component';
import { NinaReleasesPageComponent } from './landing/pages/nina-releases-page/nina-releases-page.component';

const routes: Routes = [
    {
        path: '',
        component: NinaHomePageComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: NinaHomePageComponent,
    },
    {
        path: 'releases',
        component: NinaReleasesPageComponent
    }
    //,
    // {
    //     path:'**',
    //     component: 404Component.
    // }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes)
    ], 
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {}