import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NinaAboutPageComponent } from './landing/pages/nina-about-page/nina-about-page.component';
import { NinaToolsPageComponent } from './landing/pages/nina-tools-page/nina-tools-page.component';
import { NinaContactPageComponent } from './landing/pages/nina-contact-page/nina-contact-page.component';
import { NinaContributePageComponent } from './landing/pages/nina-contribute-page/nina-contribute-page.component';
import { NinaHomePageComponent } from './landing/pages/nina-home-page/nina-home-page.component';

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
        path: 'about',
        component: NinaAboutPageComponent
    },
    {
        path: 'tools',
        component: NinaToolsPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: NinaContactPageComponent
    },
    {
        path: 'contribute',
        component: NinaContributePageComponent
    }//,
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