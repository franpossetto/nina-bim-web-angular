import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.moldule';

import { NinaMainPageComponent } from './pages/nina-main-page/nina-main-page.component';
import { NinaReleasesPageComponent } from './pages/nina-releases-page/nina-releases-page.component';
import { NinaHomePageComponent } from './pages/nina-home-page/nina-home-page.component';
import { AppRoutingModule } from '../app-rounting.module';
import { GitHubService } from '../services/github.service';

@NgModule({
    declarations: [
        NinaMainPageComponent,
        NinaReleasesPageComponent,
        NinaHomePageComponent
    ],
    exports: [
        NinaMainPageComponent,
        NinaHomePageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule
    ],
    providers: [
        GitHubService
    ]

})

export class LandingModule{}