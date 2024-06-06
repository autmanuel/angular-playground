import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AsyncPipe, NgIf} from "@angular/common";
import {StateService} from "./state.service";
import {HeaderComponent} from "./ui/header/header.component";
import {CardComponent} from "./ui/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, AsyncPipe, HeaderComponent, CardComponent],
  template: `
    <app-header></app-header>
    <router-outlet />
<!--    <app-card [shouldBeBlack]="true">-->
<!--      <h1 title class="bg-slate-800 text-green-800">test</h1>-->
<!--      <h1 description>wwefewfweewfwf</h1>-->

<!--    </app-card>-->
<!--    <app-card [shouldBeBlack]="false">-->
<!--      <h1 title class="bg-slate-800 text-green-800">test</h1>-->
<!--      <h1 description>wwefewfweewfwf</h1>-->
<!--    -->
<!--    </app-card>-->
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
