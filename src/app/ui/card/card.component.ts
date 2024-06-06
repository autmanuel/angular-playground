import {Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `

    <div class="m-5 p-5 {{shouldBeBlack() ? 'bg-black': ''}} text-center w-[500px] h-[600px] flex bg-slate-800 gap-5">

      <div class="w-full p-5">
        <div class="mt-5">
          <ng-content select="[title]"></ng-content>
        </div>
        <div class="mt-5">
          <ng-content select="[description]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class CardComponent {
  shouldBeBlack = input<boolean>();
}
