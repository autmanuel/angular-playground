import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <nav class="w-full bg-slate-800 text-white p-2.5 font-bold drop-shadow-md h-12">
      <div class="flex gap-5 justify-between">
        <div class="flex gap-5">
          <p class="cursor-pointer hover:scale-125 transition-all" routerLinkActive="underline" routerLink="/home">
            Home</p>
          <p class="cursor-pointer hover:scale-125 transition-all" routerLinkActive="underline" routerLink="/to-do">
            ToDo</p>
          <p class="cursor-pointer hover:scale-125 transition-all" routerLinkActive="underline" routerLink="/tests">
            Snippets</p>
          <p class="cursor-pointer hover:scale-125 transition-all" routerLinkActive="underline" routerLink="/employees">
            Employees</p>
          <p class="cursor-pointer hover:scale-125 transition-all" routerLinkActive="underline" routerLink="/weather">
            Weather</p>
        </div>
        <div class="px-2 flex gap-1">
          <div (click)="setLanguage('en')" [class.bg-red-400]="currentLanguage === 'en'" class="transition-all ease-in-out duration-300 cursor-pointer border px-2 hover:scale-110" ><p>EN</p></div>
          <div (click)="setLanguage('de')" [class.bg-red-400]="currentLanguage === 'de'" class="transition-all ease-in-out duration-300 cursor-pointer  border px-2 hover:scale-110"><p>DE</p></div>
        </div>
      </div>
    </nav>
  `,
  styles: ``
})
export class HeaderComponent  implements OnInit {
  currentLanguage = localStorage.getItem('language') ?? 'en';
  translateService = inject(TranslateService);
  setLanguage(language: 'de' | 'en') {
    localStorage.setItem('language', language);
    this.currentLanguage = localStorage.getItem('language') ?? 'en';
    this.translateService.setDefaultLang(this.currentLanguage);
  }

  ngOnInit() {
    this.currentLanguage = localStorage.getItem('language') ?? 'en';
    this.translateService.setDefaultLang(this.currentLanguage);
  }
}
