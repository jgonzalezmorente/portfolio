import { Component } from '@angular/core';
import { MenuItem } from '../../../interfaces';

@Component({
  selector: 'core-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {

  public visible: boolean = false;

  public menuItems: MenuItem[] = [
    { id: 'intro', icon: 'fa-solid fa-house fa-fw', name: 'Inicio' },
    { id: 'about', icon: 'fa-solid fa-user fa-fw', name: 'Acerca de' },
    { id: 'experience', icon: 'fa-solid fa-briefcase fa-fw', name: 'Experiencia' },
    { id: 'projects', icon: 'fa-solid fa-folder-open fa-fw', name: 'Proyectos' },
    { id: 'resume', icon: 'fa-solid fa-file-alt fa-fw', name: 'Curriculum' },
    { id: 'contact', icon: 'fa-solid fa-envelope fa-fw', name: 'Contacto' },
  ];

  toggleMenu() {
    this.visible = !this.visible;
  }
    
  
}
