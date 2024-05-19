import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ScrollService } from '../../../core/presentation/services/scroll.service';
import { SectionID } from '../../../core/enums';

const COMPONENT_ID = SectionID.Contact.toString();

@Component({
  selector: 'user-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.scss'
})
export class ContactViewComponent implements AfterViewInit {

  public componentId = COMPONENT_ID;

  @ViewChild(COMPONENT_ID) intro?: ElementRef;
  
  private scrollService = inject(ScrollService);

  ngAfterViewInit(): void {
    this.scrollService.registerElement(this.componentId, this.intro?.nativeElement);
  }  

}
