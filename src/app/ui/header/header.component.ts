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
    <nav class="w-full bg-slate-800 text-white p-2.5 font-bold drop-shadow-md h-12">
      <div class="flex gap-5">
        <p class="cursor-pointer hover:scale-125 transition-all" routerLinkActive="underline" routerLink="/home">Home</p>
        <p class="cursor-pointer hover:scale-125 transition-all" routerLinkActive="underline" routerLink="/to-do">ToDo</p>
        <p class="cursor-pointer hover:scale-125 transition-all" routerLinkActive="underline" routerLink="/tests">Snippets</p>
        <p class="cursor-pointer hover:scale-125 transition-all" routerLinkActive="underline" routerLink="/employees">Employees</p>
      </div>
    </nav>
  `,
  styles: ``
})
export class HeaderComponent {

}
