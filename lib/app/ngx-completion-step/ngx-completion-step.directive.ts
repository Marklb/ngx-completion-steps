import { Directive, Input } from '@angular/core'

@Directive({
  selector: 'ng-template[ngxCompletionStepTpl]',
})
export class NgxCompletionStepDirective {
  @Input() name: string
  @Input() header: string
  @Input() description: string
  @Input() state: string

  constructor() {}
}
