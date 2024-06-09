import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface IntersectionInfo {
  element: Element;
  isIntersecting: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FirstVisibleObserverService {
  private observer!: IntersectionObserver;
  private intersectionSource = new Subject<IntersectionInfo>();  
  private elementsState = new Map<Element, boolean>();
  
  get intersection$() {
    return this.intersectionSource.asObservable();
  }

  constructor() {
    this.observer = new IntersectionObserver((entries) => {      
      entries.forEach(entry => this.elementsState.set(entry.target, entry.isIntersecting));
      this.checkFirstIntersection();
    }, { threshold: 0.1 });    
  }

  private checkFirstIntersection() {
    const visibleEntries = Array.from(this.elementsState)
      .filter(([,isIntersecting]) => isIntersecting)
      .sort((a, b) => a[0].getBoundingClientRect().top - b[0].getBoundingClientRect().top);  
    const firstVisible = visibleEntries.length > 0 ? visibleEntries[0][0]: undefined;
    this.handleVisibilityChanges(firstVisible);
  }

  private handleVisibilityChanges(firstVisible?: Element) {
    for(let element of this.elementsState.keys()) {
      (element === firstVisible) 
        ? this.intersectionSource.next({element, isIntersecting: true})
        : this.intersectionSource.next({element, isIntersecting: false})
    }    
  }

  observe(element: Element): void {    
    this.observer.observe(element);    
  }

  unobserve(element: Element): void {
    this.observer.unobserve(element);
    this.elementsState.delete(element);

  }

  disconnectObserver(): void {
    this.observer.disconnect();
    this.elementsState.clear();
  }
}
