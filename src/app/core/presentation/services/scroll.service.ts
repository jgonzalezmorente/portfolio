import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private elementsMap = new Map<string, HTMLElement>();
  public registerElement(id: string, element: HTMLElement): void {
    this.elementsMap.set(id, element);
  }
  public scrollToElement(id: string): void {
    const element = this.elementsMap.get(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
