import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ScrollService } from '../../../core/presentation/services/scroll.service';
import { SectionID } from '../../../core/enums/section-id.enum';

const COMPONENT_ID = SectionID.Projects.toString();

@Component({
  selector: 'user-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrl: './projects-view.component.scss'
})
export class ProjectsViewComponent implements AfterViewInit {
  public componentId = COMPONENT_ID;

  @ViewChild(COMPONENT_ID) intro?: ElementRef;
  
  private scrollService = inject(ScrollService);

  ngAfterViewInit(): void {
    this.scrollService.registerElement(this.componentId, this.intro?.nativeElement);
  }
}
