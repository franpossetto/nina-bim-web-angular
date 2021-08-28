import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.moldule';

import { NinaMainPageComponent } from './pages/nina-main-page/nina-main-page.component';
import { NinaAboutPageComponent } from './pages/nina-about-page/nina-about-page.component';
import { NinaToolsPageComponent } from './pages/nina-tools-page/nina-tools-page.component';
import { NinaContactPageComponent } from './pages/nina-contact-page/nina-contact-page.component';
import { NinaContributePageComponent } from './pages/nina-contribute-page/nina-contribute-page.component';
import { NinaReleasesPageComponent } from './pages/nina-releases-page/nina-releases-page.component';
import { NinaHomePageComponent } from './pages/nina-home-page/nina-home-page.component';
import { AppRoutingModule } from '../app-rounting.module';

@NgModule({
    declarations: [
        NinaMainPageComponent,
        NinaAboutPageComponent,
        NinaToolsPageComponent,
        NinaContactPageComponent,
        NinaContributePageComponent,
        NinaReleasesPageComponent,
        NinaHomePageComponent
    ],
    exports: [
        NinaMainPageComponent,
        NinaAboutPageComponent,
        NinaToolsPageComponent,
        NinaContactPageComponent,
        NinaHomePageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule
    ]

})

export class LandingModule{}