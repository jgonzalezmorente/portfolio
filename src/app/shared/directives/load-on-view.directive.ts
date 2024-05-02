import { TemplateRef, Directive, Input, OnDestroy, Type, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoadOnView]'
})
export class LoadOnViewDirective implements OnDestroy {

  private hasView = false;
  private observer?: IntersectionObserver;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input({ required: true }) set appLoadOnView( component: Type<any> ) {
    if (!this.observer) {
      this.observer = new IntersectionObserver( entries => {
        entries.forEach( entry => {
          if ( entry.isIntersecting && !this.hasView ) {
            this.viewContainerRef.createComponent( component );
            this.hasView = true;
            this.observer?.disconnect();
          }
        })
      }, //{ rootMargin: '-100px', threshold: [0]}
    );
    }
    this.observer.observe( this.templateRef.elementRef.nativeElement );
  }

  ngOnDestroy(): void {
    if ( this.observer ) {
      this.observer.disconnect();
    }
  }
}
