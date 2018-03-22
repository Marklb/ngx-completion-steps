import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NgxCompletionStepsComponent } from './ngx-completion-steps.component'

describe('NgxCompletionStepsComponent', () => {
  let component: NgxCompletionStepsComponent
  let fixture: ComponentFixture<NgxCompletionStepsComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NgxCompletionStepsComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCompletionStepsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
