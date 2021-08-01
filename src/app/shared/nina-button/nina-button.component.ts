import { Component, Input } from '@angular/core'

@Component({
    selector: 'nina-button',
    templateUrl:'./nina-button.component.html',
    styleUrls: ['./nina-button.component.sass']
})

export class NinaButtonComponent {
    
    private _link: string = "https://github.com/franpossetto/Nina/releases/latest/download/Nina.msi";
    version: string = "1.4.1"
    @Input() message: string = "Hello"    
    download(): void
    {
        window.location.assign(this._link)
    }
}


//Because time matters :)