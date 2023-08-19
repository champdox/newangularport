import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newangularport';
  @ViewChild('sidemenu',{static: true}) sidemenu!: ElementRef;


  openmenu() {
    this.sidemenu.nativeElement.style.right = '0';
  }

  closemenu() {
    this.sidemenu.nativeElement.style.right = '-200px';
  }
}
