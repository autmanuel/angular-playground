import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <nav class="w-full bg-slate-800 text-white p-2.5 font-bold drop-shadow-md">
      <div class="flex gap-5">
        <p class="cursor-pointer" routerLinkActive="underline" routerLink="/home">Home</p>
        <p class="cursor-pointer" routerLinkActive="underline" routerLink="/to-do">ToDo</p>
      </div>
    </nav>
  `,
  styles: ``
})
export class HeaderComponent {

}
