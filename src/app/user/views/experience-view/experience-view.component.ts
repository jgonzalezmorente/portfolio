import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ScrollService } from '../../../core/presentation/services/scroll.service';
import { SectionID } from '../../../core/enums';

const COMPONENT_ID = SectionID.Experience.toString();

@Component({
  selector: 'user-experience-view',
  templateUrl: './experience-view.component.html',
  styleUrl: './experience-view.component.scss'
})
export class ExperienceViewComponent implements AfterViewInit {
  public componentId = COMPONENT_ID;

  @ViewChild(COMPONENT_ID) intro?: ElementRef;
  
  private scrollService = inject(ScrollService);

  ngAfterViewInit(): void {
    this.scrollService.registerElement(this.componentId, this.intro?.nativeElement);
  }
}
