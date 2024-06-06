import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AsyncPipe, NgIf} from "@angular/common";
import {StateService} from "./state.service";
import {HeaderComponent} from "./ui/header/header.component";
import {CardComponent} from "./ui/card/card.component";
import {HighlightDirective} from "./ui/directives/highlight.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, AsyncPipe, HeaderComponent, CardComponent, HighlightDirective],
  template: `
    <app-header></app-header>
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
