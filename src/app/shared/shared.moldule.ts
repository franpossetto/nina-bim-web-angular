import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {Router, RouterModule} from '@angular/router';

import { NinaButtonComponent } from './nina-button/nina-button.component';
import { NinaFooterComponent } from './nina-footer/nina-footer.component';
import { NinaMenuComponent } from './nina-menu/nina-menu.component';
import { NinaInProgressMsgComponent } from './nina-in-progress-msg/nina-in-progress-msg.component';

@NgModule({
    declarations: [
        NinaButtonComponent,
        NinaFooterComponent,
        NinaMenuComponent,
        NinaInProgressMsgComponent
    ],
    exports: [
        NinaButtonComponent,
        NinaFooterComponent,
        NinaMenuComponent,
        NinaInProgressMsgComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule {}