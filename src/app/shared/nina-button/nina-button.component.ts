import { Component, Input } from '@angular/core'

@Component({
    selector: 'nina-button',
    templateUrl:'./nina-button.component.html',
    styleUrls: ['./nina-button.component.sass']
})

export class NinaButtonComponent {
    
    version: string = "1.4.2"
    private _link: string = "https://github.com/franpossetto/Nina/releases/latest/download/Nina.Setup.v" + this.version + ".msi";
    @Input() message: string = "Hello"    
    download(): void
    {
        window.location.assign(this._link)
    }
}


//Because time matters :)