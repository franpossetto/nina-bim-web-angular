import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {Router, RouterModule} from '@angular/router';

import { NinaButtonComponent } from './nina-button/nina-button.component';
import { NinaFooterComponent } from './nina-footer/nina-footer.component';

@NgModule({
    declarations: [
        NinaButtonComponent,
        NinaFooterComponent
    ],
    exports: [
        NinaButtonComponent,
        NinaFooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule {}