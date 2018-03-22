import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NgxCompletionStepComponent } from './ngx-completion-step/ngx-completion-step.component'
import { NgxCompletionStepDirective } from './ngx-completion-step/ngx-completion-step.directive'
import { NgxCompletionStepsComponent } from './ngx-completion-steps.component'

@NgModule({
  imports: [CommonModule],
  exports: [
    NgxCompletionStepsComponent,
    NgxCompletionStepComponent,
    NgxCompletionStepDirective,
  ],
  declarations: [
    NgxCompletionStepsComponent,
    NgxCompletionStepComponent,
    NgxCompletionStepDirective,
  ],
})
export class NgxCompletionStepsModule {}
