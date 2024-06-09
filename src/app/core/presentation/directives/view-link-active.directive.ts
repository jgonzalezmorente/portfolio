import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Subject, takeUntil, filter } from 'rxjs';
import { FirstVisibleObserverService } from '../services/first-visibility-observer.service';

@Directive({
  selector: '[viewLinkActive]'
})
export class ViewLinkActiveDirective implements OnInit, OnDestroy {

  private _cssClassName: string = '';
  private _targetId: string = '';  
  
  @Input('viewLinkActive') 
  set cssClassName(value: string) {
    this._cssClassName = value;    
  }
  
  @Input() 
  set targetId(value: string) {
    this._targetId = value;    
  }

  private firstVisibleObserverService = inject(FirstVisibleObserverService);
  private element = inject(ElementRef);  
  private unsubscribe: Subject<void> = new Subject<void>();  
  
  ngOnInit(): void {
    this.firstVisibleObserverService.intersection$.pipe( 
      takeUntil(this.unsubscribe),
      filter(({ element }) => element.id === this._targetId)
    ).subscribe( ({ element, isIntersecting }) => {      
      (element.id === this._targetId && isIntersecting ) 
        ? this.element.nativeElement.classList.add(this._cssClassName) 
        : this.element.nativeElement.classList.remove(this._cssClassName);      
    });
  }
    
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }  
}

