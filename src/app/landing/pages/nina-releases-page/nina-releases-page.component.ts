import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nina-releases-page',
  templateUrl: './nina-releases-page.component.html',
  styleUrls: ['./nina-releases-page.component.sass']
})
export class NinaReleasesPageComponent {

  constructor() { }

  releases: string[] = ["Nina v1.42", "Nina v.1.30", "Nina v.1.2.3", "Nina v.1.30", "Nina v.1.2.3", "Nina v.1.30", "Nina v.1.2.3", "Nina v.1.30", "Nina v.1.2.3", "Nina v.1.30", "Nina v.1.2.3"]

  

}
