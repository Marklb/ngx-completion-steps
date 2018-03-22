import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import { NgxCompletionStepsComponent } from '../../../lib/app/public_api'
import { Example3Component } from '../example3/example3.component'

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss'],
})
export class Example2Component implements OnInit, OnDestroy {
  compRef
  compRef2

  constructor(
    private resolver: ComponentFactoryResolver,
    private vcRef: ViewContainerRef
  ) {}

  ngOnInit() {}

  onClickOpen() {
    // this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(
      NgxCompletionStepsComponent
    )
    // const componentRef = this.entry.createComponent(factory);
    // componentRef.instance.message = message;
    this.compRef = this.vcRef.createComponent(factory)

    // this.doc.body.appendChild(this.compRef.location.nativeElement);

    const doc: any = document as any

    const win = window.open('', '_blank', 'width=700,height=600,resizable=1')
    win.document.head.innerHTML = doc.head.innerHTML
    win.document.body.appendChild(this.compRef.location.nativeElement)
  }

  onClickOpen2() {
    // this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(Example3Component)
    // const componentRef = this.entry.createComponent(factory);
    // componentRef.instance.message = message;
    this.compRef2 = this.vcRef.createComponent(factory)

    // this.doc.body.appendChild(this.compRef2.location.nativeElement);

    const doc: any = document as any

    const win = window.open('', '_blank', 'width=700,height=600,resizable=1')
    win.document.head.innerHTML = doc.head.innerHTML
    win.document.body.appendChild(this.compRef2.location.nativeElement)
  }

  onClickStart2() {
    this.compRef2.instance.start()
  }

  ngOnDestroy() {
    // this.componentRef.destroy();
  }
}
