import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = 'Nina';
  subtitle: string = "A collection of tiny tools for Autodesk Revit"
  copyright: string = "2019-2021 Nina"
  author: string = "Francisco Possetto"
}
