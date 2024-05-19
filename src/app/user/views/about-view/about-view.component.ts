import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ScrollService } from '../../../core/presentation/services/scroll.service';
import { SectionID } from '../../../core/enums';

const COMPONENT_ID = SectionID.About.toString();

@Component({
  selector: 'user-about-view',
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.scss'
})
export class AboutViewComponent implements AfterViewInit {

  public componentId = COMPONENT_ID;

  @ViewChild(COMPONENT_ID) intro?: ElementRef;
  
  private scrollService = inject(ScrollService);

  ngAfterViewInit(): void {
    this.scrollService.registerElement(this.componentId, this.intro?.nativeElement);
  }


}
