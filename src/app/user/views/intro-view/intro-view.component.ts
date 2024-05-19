import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ScrollService } from '../../../core/presentation/services/scroll.service';
import { SectionID } from '../../../core/enums';

const COMPONENT_ID = SectionID.Intro.toString();

@Component({
  selector: 'user-intro-view',
  templateUrl: './intro-view.component.html',
  styleUrl: './intro-view.component.scss'
})
export class IntroViewComponent implements AfterViewInit {
  
  public componentId = COMPONENT_ID;

  @ViewChild(COMPONENT_ID) intro?: ElementRef;
  
  private scrollService = inject(ScrollService);

  ngAfterViewInit(): void {
    this.scrollService.registerElement(this.componentId, this.intro?.nativeElement);
  }

}
