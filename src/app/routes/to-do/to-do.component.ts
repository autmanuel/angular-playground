import {Component, inject, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

interface SelectOption {
  value: Priority;
  display: string;
}
interface TodoElement {
  title: string;
  content: string;
  image: string;
  priority: number;
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
    ReactiveFormsModule
  ],
  template: `
    <div class="max-w-4xl mx-auto">
      <h1 class="m-5 text-2xl font-bold">
        Todo List
      </h1>
      <div class="flex flex-col md:px-0 px-5  w-full" [formGroup]="fg">
        <div class="md:w-2/3 sm:w-3/4 w-full self-center flex flex-col gap-2">
          <div>
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task title</label>
            <input formControlName="title" type="text" id="title"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Add task title" required/>
          </div>
          <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
          <textarea formControlName="content" id="content" rows="4"
                    class=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Add task description"></textarea>

              <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task image</label>
              <input formControlName="image" type="text" id="image"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Paste link of task image here" />
          <label for="priority" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Priority</label>
          <select id="priority" class="bg-gray-50 dark:bg-gray-700 dark:text-white text-white p-2" formControlName="priority">
            <option *ngFor="let priorityOption of priorityOptions" [value]="priorityOption.value">{{priorityOption.display}}</option>
          </select>
            </div>
          <button [disabled]="fg.invalid" (click)="submitTodo()" type="button"
                  class=" disabled:bg-gray-500 hover:disabled:bg-gray-500 self-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Add Todo
          </button>
        </div>

        <div class="tasks w-full mt-5 p-2 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <div *ngFor="let todo of todos; let i = index" class="w-full relative rounded min-h-[250px] overflow-hidden shadow-2xl  bg-slate-900">
            <div class="absolute top-2 right-2 w-4 h-4  rounded-3xl {{getColorByPriority(todo)}}"></div>
            <img class="my-2" src="{{todo.image}}" alt="task image">
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

          </div>
        </div>
      </div>
  `,
  styles: ``
})
export class ToDoComponent implements OnInit {

  todos: TodoElement[] = [];
  fb = inject(FormBuilder);
  fg = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    image: [''],
    // @ts-ignore
    priority: [Priority.LOW, Validators.required]
  });

  priorityOptions: SelectOption[] = [
    {value: Priority.LOW, display: 'Low'},
    {value: Priority.MIDDLE, display: 'Middle'},
    {value: Priority.HIGH, display: 'High'},

  ]
  submitTodo() {
    if (this.fg.invalid)
      return;

    let value = this.fg.getRawValue();
    value.priority = parseInt(value.priority+'');

    this.todos.push(value as TodoElement);

    this.fg.patchValue({title: '', content: '', image: '',priority: Priority.LOW });

    this.todos = this.todos.sort((a,b) => {
      return b.priority - a.priority;
    })

    this.updateTodosInLocalStorage();
  }

  ngOnInit() {
    this.todos = JSON.parse(localStorage.getItem('todos') ?? '[]');
    console.log(this.fg.getRawValue());
  }

  updateTodosInLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeItemAtIndex(index: number) {
    this.todos = this.todos.filter((entry, entryIndex) => {
      return entryIndex !== index
    })
    this.updateTodosInLocalStorage();
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
}
