/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { NgxCompletionStepComponent } from './ngx-completion-step.component'

describe('NgxCompletionStepComponent', () => {
  let component: NgxCompletionStepComponent
  let fixture: ComponentFixture<NgxCompletionStepComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NgxCompletionStepComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCompletionStepComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
