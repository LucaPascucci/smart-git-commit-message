import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {Subject, Subscription, takeUntil} from 'rxjs';
import {TemplatePortal} from '@angular/cdk/portal';
import {PopoverService} from '../service/popover.service'; // TODO: -> https://medium.com/@JoaoPoggioli/creating-a-custom-popover-with-overlay-in-angular-dfb330cfd124

// NOTE: -> https://medium.com/@JoaoPoggioli/creating-a-custom-popover-with-overlay-in-angular-dfb330cfd124

@Directive({
  selector: '[popoverTrigger]',
})
export class PopoverDirective implements OnDestroy, OnInit, OnDestroy {
  @Input() popoverTrigger!: TemplateRef<object>;
  @Input() handleOnClick: boolean = false;
  @Input() handleOnHover: boolean = false;

  private unsubscribe = new Subject();
  private overlayRef!: OverlayRef;

  private subscriptions: Subscription[] = [];
  private isMouseOver = false;

  constructor(
    private elementRef: ElementRef,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    private popoverService: PopoverService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.createOverlay();
    this.subscriptions.push(
      this.popoverService.getState().subscribe((value) => {
        if (value) {
          this.detachOverlay();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.detachOverlay();
    this.unsubscribe.complete();
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  @HostListener('click') onClick(): void {
    if (this.handleOnClick) {
      this.attachOverlay();
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isMouseOver = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isMouseOver = false;
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (this.isMouseOver) {
      this.attachOverlay();
    }
  }

  private createOverlay(): void {
    const scrollStrategy = this.overlay.scrollStrategies.block();

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
        },
      ]);

    //TODO: learn how position work
    // new ConnectionPositionPair(
    //   { originX: "start", originY: "bottom" },
    //   { overlayX: "start", overlayY: "bottom" }
    // ),
    // new ConnectionPositionPair(
    //   { originX: "start", originY: "bottom" },
    //   { overlayX: "start", overlayY: "bottom" }
    // )

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy,
      hasBackdrop: true,
      backdropClass: '',
    });

    this.subscriptions.push(
      this.overlayRef
        .backdropClick()
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(() => {
          if (this.handleOnClick) {
            this.detachOverlay();
          }
        })
    );
  }

  private attachOverlay(): void {
    if (!this.overlayRef.hasAttached()) {
      const periodSelectorPortal = new TemplatePortal(
        this.popoverTrigger,
        this.vcr
      );

      this.overlayRef.attach(periodSelectorPortal);
    }
  }

  private detachOverlay(): void {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }
}
