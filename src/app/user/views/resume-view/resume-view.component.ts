import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ScrollService } from '../../../core/presentation/services/scroll.service';
import { SectionID } from '../../../core/enums';

const COMPONENT_ID = SectionID.Resume.toString();

@Component({
  selector: 'user-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrl: './resume-view.component.scss'
})
export class ResumeViewComponent {

  public componentId = COMPONENT_ID;

  @ViewChild(COMPONENT_ID) intro?: ElementRef;
  
  private scrollService = inject(ScrollService);

  ngAfterViewInit(): void {
    this.scrollService.registerElement(this.componentId, this.intro?.nativeElement);
  }  

}
