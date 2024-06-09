import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'shared-section-title',
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent implements OnChanges {
  
  @Input({ required: true }) title: string = '';
  @Input() level: number = 1;
  
  public headText?: string;
  public tailText?: string;
  
  ngOnChanges(changes: SimpleChanges): void {
    const words = this.title.trim().split(' ');    
    if (!words) return;    
    if (words.length === 1) {      
      this.headText = words.pop();
      return;
    }
    this.tailText = words.pop();
    this.headText = words.join(' ');
  }

  

}
