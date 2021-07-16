import { Component } from '@angular/core'

@Component({
    selector: 'nina-button',
    templateUrl:'./nina-button.component.html',
    styleUrls: ['./nina-button.component.sass']
})

export class NinaButtonComponent {
    
    private _link: string = "https://github.com/franpossetto/Nina/releases/latest/download/Nina.msi";

    version: string = "1.1.3"
    
    download(): void
    {
        window.location.assign(this._link)
    }
}