import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {State, StateService} from "../state.service";
import {CardComponent} from "../ui/card/card.component";
import {HighlightDirective} from "../ui/directives/highlight.directive";

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    HighlightDirective
  ],
  template: `
    <div class="grid grid-cols-3 gap-5" [formGroup]="formGroup">
      <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
        <input formControlName="firstName" type="text" id="first_name"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Firstname" required/>
      </div>
      <div>
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
        <input formControlName="lastName" type="text" id="last_name"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Lastname" required/>
      </div>
      <div>
        <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
        <input formControlName="age" type="number" id="age"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Age" required/>
      </div>
      <button (click)="update()">
        Button
      </button>
    </div>
<!--    directive-->
    <h1 appHighlight>Test</h1>
<!--ng content projection-->
        <app-card [shouldBeBlack]="true">
          <h1 title class="bg-slate-800 text-green-800">test</h1>
          <h1 description>wwefewfweewfwf</h1>

        </app-card>
        <app-card [shouldBeBlack]="false">
          <h1 title class="bg-slate-800 text-green-800">test</h1>
          <h1 description>wwefewfweewfwf</h1>

        </app-card>
  `,
  styles: ``
})
export class TestsComponent implements OnInit {

  formBuilder = inject(FormBuilder);
  stateService = inject(StateService);

  formGroup = this.formBuilder.group({
    firstName: '',
    lastName: '',
    age: 0
  })

  ngOnInit(): void {
    this.stateService.state.subscribe(state => {
      this.formGroup.patchValue(state, {emitEvent: false});
    })
    this.formGroup.valueChanges.subscribe(value => {
      this.update();
    })
  }

  update() {
    this.stateService.updateState(this.formGroup.getRawValue() as State)

  }
}
