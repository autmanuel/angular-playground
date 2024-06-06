import { Injectable } from '@angular/core';
import {Note} from "./notes.model";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
notes : Note [] = [];
  constructor() { }
  create(text: string) {

  };
  update(i: number, text: string){

  };
  delete(i: number){

  };
}
