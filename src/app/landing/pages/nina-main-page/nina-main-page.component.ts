import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/services/github.service';

@Component({
  selector: 'nina-main-page',
  templateUrl: './nina-main-page.component.html',
  styleUrls: ['./nina-main-page.component.sass'],
})
export class NinaMainPageComponent implements OnInit {
  title: string;
  title2: string;
  loading: boolean;
  description: string;

  public version: string = '';
  public url: string = '';
  public latest: any = [];

  constructor(private gitHubService: GitHubService) {
    this.title = 'nina';
    this.title2 = 'for Revit';
    this.loading = true;
    this.description = 'A collection of tiny tools for Autodesk Revit.';
  }
  ngOnInit(): void {
    this.getDataFromGitHubService();
  }

  getDataFromGitHubService(): any {
    this.gitHubService.getDataFromGitHub().subscribe((response: any) => {
      this.latest = response[0];
      this.version = this.latest.tag_name;
      this.loading = false;
      this.gitHubService.data.next(this.latest);
    });
  }
}
