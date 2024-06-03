import {Component, inject, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import moment from "moment"
import {TranslateModule} from "@ngx-translate/core";

interface SelectOption {
  value: Priority;
  display: string;
}
interface TodoElement {
  title: string;
  content: string;
  image: string;
  priority: Priority;
  date: Date;
}
enum Priority {
  LOW,
  MIDDLE,
  HIGH
}
@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    TranslateModule,
    DatePipe,

  ],
  providers: [],
  template: `
    <h1 class="mx-2 my-5 text-2xl font-bold">
      {{"routes.todo.title" | translate}}
    </h1>
    <div class="max-w-4xl mx-auto">

      <div class="flex flex-col md:px-0 px-5  w-full gap-2" [formGroup]="fg">
        <div class="w-full self-center flex flex-col">

          <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">{{"routes.todo.form.taskTitle" | translate}}</label>
          <input formControlName="title" type="text" id="title"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 [placeholder]="'routes.todo.form.taskTitlePlaceHolder' | translate" required/>
        </div>
        <div>
        <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{'routes.todo.form.todoDescription' |translate}}</label>
        <textarea formControlName="content" id="content" rows="4"
                  class=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  [placeholder]="'routes.todo.form.todoDescriptionPlaceHolder' |translate"></textarea>
        </div>
        <div>
        <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{'routes.todo.form.image' |translate}}</label>
        <input formControlName="image" type="text" id="image"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               [placeholder]="'routes.todo.form.imagePlaceHolder' |translate"/>
        </div>
        <div class="w-full">
          <label for="priority" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{'routes.todo.form.priority' |translate}}</label>
        <select id="priority" class="bg-gray-50 w-full dark:bg-gray-700 dark:text-white text-white p-2"
                formControlName="priority">
          <option *ngFor="let priorityOption of priorityOptions"
                  [value]="priorityOption.value">{{ priorityOption.display | translate }}
          </option>
        </select>
        </div>
        <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{'routes.todo.form.date' |translate}}</label>
        <input type="date"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               formControlName="date"
        />
        </div>

        <button [disabled]="fg.invalid" (click)="submitTodo()" type="button"
                class=" disabled:bg-gray-500 hover:disabled:bg-gray-500 self-end mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          {{'routes.todo.form.submitButton' |translate}}
        </button>
      </div>
    </div>
    <div class="max-w-4xl mx-auto">
    <div
      class="tasks px-5  w-full mt-5 p-2 grid xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10">
      <div *ngFor="let todo of todos; let i = index"
           class="w-full flex flex-col justify-between relative rounded min-h-[250px] overflow-hidden shadow-2xl  bg-slate-900">
        <div class="absolute bottom-2 left-2 w-4 h-4  rounded-3xl {{getColorByPriority(todo)}}"></div>
        <img *ngIf="todo.image" class="my-2" src="{{todo.image}}" alt="task image">
        <div class="flex justify-between p-3">
          <h3 class="mb-5 text-2xl break-all">{{ todo.title }}</h3>
          <div (click)="removeItemAtIndex(i)" class="hover:scale-110 cursor-pointer transition-all duration-300 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clip-rule="evenodd"/>
            </svg>
          </div>
        </div>
        <p class="p-2">{{ todo.content }}</p>
        <p class="p-2 mb-2">{{ todo.date | date }}</p>

        <div class="text-green-800 w-full pt-5 flex justify-end justify-self-end p-2 cursor-pointer"
             (click)="moveItemAtIndexToDone(i)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd"/>
          </svg>

        </div>
      </div>

    </div>

    <h1 class="text-xl mx-2 mt-8">{{'routes.todo.doneTodos' |translate}}</h1>

    <div
      class="tasks w-full px-5 mt-5 p-2 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10">
      <div *ngFor="let doneTodo of doneTodos; let i = index"
           class="w-full  opacity-50 relative rounded min-h-[250px] overflow-hidden shadow-2xl  bg-slate-900">
        <div class="absolute bottom-2 left-2 w-4 h-4  rounded-3xl {{getColorByPriority(doneTodo)}}"></div>
        <img *ngIf="doneTodo.image" class="my-2" src="{{doneTodo.image}}" alt="task image">
        <div class="flex justify-between p-3">
          <h3 class="mb-5 text-2xl break-all">{{ doneTodo.title }}</h3>
          <div (click)="removeItemAtIndex(i, true)" class="hover:scale-110 cursor-pointer transition-all duration-300 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clip-rule="evenodd"/>
            </svg>
          </div>
        </div>
        <p class="p-2 mb-2">{{ doneTodo.content }}</p>
        <p class="p-2 mb-2">{{ doneTodo.date | date }}</p>

      </div>
    </div>
    </div>
  `,
  styles: ``
})
export class ToDoComponent implements OnInit {

  todos: TodoElement[] = [];
  doneTodos: TodoElement[] = [];
  fb = inject(FormBuilder);
  fg = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    image: [''],
    // @ts-ignore
    priority: [Priority.LOW, Validators.required],
    date: [new Date().toISOString().slice(0, 10), Validators.required]
  });

  priorityOptions: SelectOption[] = [
    {value: Priority.LOW, display: 'routes.todo.priorityOptions.low'},
    {value: Priority.MIDDLE, display: 'routes.todo.priorityOptions.middle'},
    {value: Priority.HIGH, display: 'routes.todo.priorityOptions.high'},

  ]



  httpClient: HttpClient = inject(HttpClient);

  submitTodo() {
    if (this.fg.invalid)
      return;

    let value = this.fg.getRawValue();
    value.priority = parseInt(value.priority+'');

    this.todos.push({
      ...value,
      date: new Date(value.date!)
     } as TodoElement);
    console.log(this.todos);
    this.fg.patchValue({title: '', content: '', image: '',priority: Priority.LOW, date: new Date().toISOString().slice(0, 10)});

    this.sortTodos();
    this.updateTodosInLocalStorage();
  }

  sortTodos() {
    this.todos = this.todos.sort((a,b) => {
      return b.priority - a.priority;
    })
  }
  ngOnInit() {
    /*this.httpClient.get<TodoElement[]>('http://localhost:3000/todos/all').subscribe(data => {
      console.log(data);
    })*/
    this.todos = JSON.parse(localStorage.getItem('todos') ?? '[]');
    this.doneTodos = JSON.parse(localStorage.getItem('doneTodos') ?? '[]');
    console.log(this.fg.getRawValue());
  }

  updateTodosInLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  updateDoneTodosInLocalStorage() {
    localStorage.setItem('doneTodos', JSON.stringify(this.doneTodos));
  }

  removeItemAtIndex(index: number, fromDone?: boolean) {
    if(fromDone) {
      this.doneTodos = this.doneTodos.filter((entry, entryIndex) => {
        return entryIndex !== index
      })
      this.updateDoneTodosInLocalStorage();
    } else {
      this.todos = this.todos.filter((entry, entryIndex) => {
        return entryIndex !== index
      })
      this.updateTodosInLocalStorage();
    }

  }

  moveItemAtIndexToDone(index: number){
    const item = this.todos[index];
    this.removeItemAtIndex(index);
    this.doneTodos.push(item);
    this.updateDoneTodosInLocalStorage();
  }
  getColorByPriority(todo: TodoElement) {
      switch (todo.priority){
        case Priority.LOW:
          return 'bg-emerald-800';
        case Priority.MIDDLE:
          return 'bg-amber-300';
        case Priority.HIGH:
          return 'bg-red-600';
        default:
          return 'bg-transparent';
      }
  }
  formatDate(date?: Date){
    if(!date)
      return '';
    return moment(date).format('ll');
  }
}
