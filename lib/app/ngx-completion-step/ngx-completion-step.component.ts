import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'ngx-completion-step',
  templateUrl: './ngx-completion-step.component.html',
  styleUrls: ['./ngx-completion-step.component.scss'],
})
export class NgxCompletionStepComponent implements OnInit {
  _state: string
  _stateCssClass: string

  stateCssClass: string
  stateCssClasses = {
    complete: 'border-success',
    error: 'border-danger',
    inProgress: 'border-info',
  }

  @Input() name: string
  @Input() header: string
  @Input() description: string

  @Input()
  set state(val: string) {
    this._state = val
    if (this.stateCssClasses.hasOwnProperty(val)) {
      this.stateCssClass = this.stateCssClasses[val]
    }
  }

  get state(): string {
    return this._state
  }

  constructor() {}

  ngOnInit() {}
}
