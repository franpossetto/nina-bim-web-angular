import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nina-home-page',
  templateUrl: './nina-home-page.component.html',
  styleUrls: ['./nina-home-page.component.sass'],
})
export class NinaHomePageComponent {
  description: string = 'A collection of tiny tools for Autodesk Revit.';
  description_md: string = 'A collection of tools for Revit.';
  description_sm: string = 'Tools for Revit.';
}
