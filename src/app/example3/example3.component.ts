import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss'],
})
export class Example3Component implements OnInit {
  steps = [
    {
      name: 'step-1',
      header: 'Step 1',
      description: 'This is step 1',
      state: 'idle',
    },
    {
      name: 'step-2',
      header: 'Step 2',
      description: 'This is step 2',
      state: 'idle',
    },
    {
      name: 'step-3',
      header: 'Step 3',
      description: 'This is step 3',
      state: 'idle',
    },
    {
      name: 'step-4',
      header: 'Step 4',
      description: 'This is step 4',
      state: 'idle',
    },
  ]

  constructor() {}

  ngOnInit() {}

  start() {
    console.log('Start')
    setTimeout(() => {
      this.steps[0].state = 'inProgress'
      setTimeout(() => {
        this.steps[0].state = 'complete'
      }, 300)
    }, 30)

    setTimeout(() => {
      this.steps[1].state = 'inProgress'
      setTimeout(() => {
        this.steps[1].state = 'complete'
      }, 400)
    }, 50)

    setTimeout(() => {
      this.steps[2].state = 'inProgress'
      setTimeout(() => {
        this.steps[2].state = 'error'
      }, 500)
    }, 70)

    setTimeout(() => {
      this.steps[3].state = 'inProgress'
      setTimeout(() => {
        this.steps[3].state = 'complete'
      }, 600)
    }, 90)
  }
}
