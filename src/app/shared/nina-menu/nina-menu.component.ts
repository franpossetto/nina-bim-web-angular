import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nina-menu',
  templateUrl: './nina-menu.component.html',
  styleUrls: ['./nina-menu.component.sass']
})
export class NinaMenuComponent {

  title: string = "Nina";
  
  sections: string[] = ["home", "about","tools", "contribute", "contact"];
  selectedSection: string = "home";
  isMainPage: boolean = true;
  
  checkMainPage(): void {
    if(this.selectedSection == "Home"){
      this.isMainPage = false;
    }
  }

}
