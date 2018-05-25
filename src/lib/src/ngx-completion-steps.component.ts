import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  TemplateRef,
} from '@angular/core'
import { NgxCompletionStepDirective } from './ngx-completion-step/ngx-completion-step.directive'

@Component({
  selector: 'ngx-completion-steps',
  templateUrl: './ngx-completion-steps.component.html',
  styleUrls: ['./ngx-completion-steps.component.scss'],
})
export class NgxCompletionStepsComponent implements OnInit, AfterContentInit {
  // @ContentChildren(NgxCompletionStepDirective, { read: TemplateRef })
  // completionStepTemplates1: QueryList<TemplateRef<any>>
  @ContentChildren(NgxCompletionStepDirective)
  completionStepTemplates: QueryList<NgxCompletionStepDirective>

  // completionStepTemplates

  completedPercent: number = 75

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    // console.log('completionStepTemplates1: ', this.completionStepTemplates1)
    // this.completionStepTemplates = this.completionStepTemplates1.toArray()
    console.log('completionStepTemplates: ', this.completionStepTemplates)
  }
}
