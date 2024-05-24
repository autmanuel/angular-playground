import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AsyncPipe, NgIf} from "@angular/common";
import {StateService} from "./state.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, AsyncPipe],
  template: `
    <h1 *ngIf="stateService.state | async as state">{{state}}</h1>

    <router-outlet />
  `,
  styles: [``],
})
export class AppComponent implements OnInit{
  title = 'training';
  stateService = inject(StateService);

  ngOnInit() {
    this.stateService.state.subscribe(value => {
      console.log('NEW VALUE FROM STATE: ', + value);
    })
  }
}
