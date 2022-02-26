import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class GitHubService {

    public version: string = "";
    public url: string = ""
    public latest: any = []

    constructor(private http: HttpClient){
        console.log('Servicio inicializado');
        
        this.http.get('https://api.github.com/repos/franpossetto/Nina/releases')
        .subscribe((response: any) => {
            this.latest = response[0];
            this.url = this.latest.tag_name;
            console.log(this.url);
        });
    }

}