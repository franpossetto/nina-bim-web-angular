import { Component, Input } from '@angular/core'
import { GitHubService } from '../../services/github.service';

@Component({
    selector: 'nina-button',
    templateUrl:'./nina-button.component.html',
    styleUrls: ['./nina-button.component.sass']
})

export class NinaButtonComponent {
    
    github_link: string = "https://github.com/franpossetto/Nina/releases"
    version: string = "v 1.4.2"
    private _link: string = "https://github.com/franpossetto/Nina/releases/latest/download/Nina.msi";
    @Input() message: string = "Hello"    
    download(): void
    {
        window.location.assign(this._link)
    }

    constructor (private gitHubService: GitHubService){
        
    }
}


//Because time matters :)