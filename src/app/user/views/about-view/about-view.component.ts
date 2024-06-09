import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ScrollService, FirstVisibleObserverService } from '../../../core/presentation/services';
import { SectionID } from '../../../core/enums';

const COMPONENT_ID = SectionID.About.toString();

@Component({
  selector: 'user-about-view',
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.scss'
})
export class AboutViewComponent implements AfterViewInit {

  public componentId = COMPONENT_ID;

  @ViewChild(COMPONENT_ID) section?: ElementRef;
  
  private scrollService = inject(ScrollService);
  private firstVisibleObserverService = inject(FirstVisibleObserverService);

  ngAfterViewInit(): void {
    this.scrollService.registerElement(this.componentId, this.section?.nativeElement);
    this.firstVisibleObserverService.observe(this.section?.nativeElement);
  }

}
