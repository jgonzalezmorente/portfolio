import { Component, ElementRef, EventEmitter, HostListener, Output, inject } from '@angular/core';
import { MenuItem } from '../../../interfaces';
import { SectionID } from '../../../enums';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'core-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {

  @Output() onVisibleChange = new EventEmitter<boolean>();

  public visible: boolean = false;
  public sections = SectionID;
  public scrollService = inject(ScrollService);
  private eRef = inject(ElementRef);
  
  public menuItems: MenuItem[] = [
    { id: this.sections.Intro, icon: 'fa-solid fa-house fa-fw', name: 'Inicio', left: '-1.2rem' },
    { id: this.sections.About, icon: 'fa-solid fa-user fa-fw', name: 'Sobre mi', left: '-2.3rem' },
    { id: this.sections.Resume, icon: 'fa-solid fa-graduation-cap', name: 'Curriculum', left: '-2.9rem' },    
    { id: this.sections.Projects, icon: 'fa-solid fa-folder-open fa-fw', name: 'Proyectos', left: '-2.8rem' },
    { id: this.sections.Contact, icon: 'fa-solid fa-envelope fa-fw', name: 'Contacto', left: '-2.3rem' },
  ];

  @HostListener('document:click', ['$event'])  
  onDocumentClick(event: MouseEvent): void {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.toggleMenu();
    }
  }

  toggleMenu() {
    this.visible = !this.visible;
    this.onVisibleChange.emit(this.visible);
  }

  scrollTo(event: Event, id: string) {    
    event.preventDefault();
    this.scrollService.scrollToElement(id);
    this.toggleMenu();
  }
}
