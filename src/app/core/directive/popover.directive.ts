import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {Subject, takeUntil} from 'rxjs';
import {TemplatePortal} from '@angular/cdk/portal';
import {PopoverService} from '../service/popover.service';

// TODO: -> https://medium.com/@JoaoPoggioli/creating-a-custom-popover-with-overlay-in-angular-dfb330cfd124

@Directive({
  selector: '[popoverTrigger]',
})
export class PopoverDirective implements OnDestroy, OnInit {
  @Input() popoverTrigger!: TemplateRef<object>;
  @Input() closeOnClickOutside: boolean = false;

  private unsubscribe = new Subject();
  private overlayRef!: OverlayRef;

  constructor(
    private elementRef: ElementRef,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    private popoverService: PopoverService
  ) {}

  ngOnInit(): void {
    this.createOverlay();
    this.popoverService.getState().subscribe((resp) => {
      if (resp) {
        this.detachOverlay();
      }
    });
  }

  ngOnDestroy(): void {
    this.detachOverlay();
    // this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  @HostListener('click') clickou(): void {
    this.attachOverlay();
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

    //TODO: entender como funciona o posicionamento
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

    this.overlayRef
      .backdropClick()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        if (this.closeOnClickOutside) {
          this.detachOverlay();
        }
      });
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
