import { Component } from '@angular/core';

@Component({
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

  public overlay: boolean = false;

  public handleVisibleChange(visible: boolean) {    
    this.overlay = visible;
  }

}
