import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ScrollService, FirstVisibleObserverService } from '../../../../core/presentation/services';
import { SectionID } from '../../../../core/enums/section-id.enum';

const COMPONENT_ID = SectionID.Projects.toString();

@Component({
  selector: 'views-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrl: './projects-view.component.scss'
})
export class ProjectsViewComponent implements AfterViewInit {
  public componentId = COMPONENT_ID;

  @ViewChild(COMPONENT_ID) section?: ElementRef;
  
  private scrollService = inject(ScrollService);
  private firstVisibleObserverService = inject(FirstVisibleObserverService);

  ngAfterViewInit(): void {
    this.scrollService.registerElement(this.componentId, this.section?.nativeElement);
    this.firstVisibleObserverService.observe(this.section?.nativeElement);
  }
}
