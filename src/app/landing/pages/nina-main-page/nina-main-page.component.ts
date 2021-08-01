import { Component } from '@angular/core';

@Component({
  selector: 'nina-main-page',
  templateUrl: './nina-main-page.component.html',
  styleUrls: ['./nina-main-page.component.sass']
})
export class NinaMainPageComponent {

  title: string = "nina"
  description: string = "A collection of tiny tools for Autodesk Revit.";

}
