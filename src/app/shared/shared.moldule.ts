import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"
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
        CommonModule
    ]
})
export class SharedModule {}