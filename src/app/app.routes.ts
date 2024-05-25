import { Routes } from '@angular/router';
import {HomeComponent} from "./routes/home/home.component";
import {ToDoComponent} from "./routes/to-do/to-do.component";

export const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'home'},
  {path:'home', component: HomeComponent},
  {path:'to-do', component: ToDoComponent}
];
