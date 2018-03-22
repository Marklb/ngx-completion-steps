import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

// import { NgxCompletionStepsModule } from '@marklb/ngx-completion-steps'
// import { NgxCompletionStepsModule } from '../../dist/lib'
import {
  NgxCompletionStepsComponent,
  NgxCompletionStepsModule,
} from '../../lib/app/public_api'

import { AppComponent } from './app.component'
import { Example1Component } from './example1/example1.component'
import { Example2Component } from './example2/example2.component'
import { Example3Component } from './example3/example3.component'

@NgModule({
  declarations: [
    AppComponent,
    Example2Component,
    Example1Component,
    Example3Component,
  ],
  imports: [BrowserModule, NgxCompletionStepsModule],
  providers: [],
  entryComponents: [NgxCompletionStepsComponent, Example3Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
