import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { GitHubService } from '../../services/github.service';

@Component({
  selector: 'nina-button',
  templateUrl: './nina-button.component.html',
  styleUrls: ['./nina-button.component.sass'],
})
export class NinaButtonComponent implements OnInit {
  github_link: string = 'https://github.com/franpossetto/Nina/releases';
  private _link: string =
    'https://github.com/franpossetto/Nina/releases/latest/download/Nina.msi';
  @Input() message: string = 'Hello';
  download(): void {
    window.location.assign(this._link);
  }
  version: string;

  get ninaVersion(): string {
    return this.version;
  }

  constructor(public gitHubService: GitHubService) {
    this.version = '';
  }

  ngOnInit(): void {
    this.gitHubService.data.subscribe((responseZero: any) => {
      this.version = responseZero.tag_name;
    });
  }
}

//Because time matters :)
