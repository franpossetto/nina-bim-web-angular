import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.moldule';

import { NinaMainPageComponent } from './pages/nina-main-page/nina-main-page.component';

@NgModule({
    declarations: [
        NinaMainPageComponent,
    ],
    exports: [
        NinaMainPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule
    ]

})

export class LandingModule{}