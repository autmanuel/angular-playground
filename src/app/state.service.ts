import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface State {
  firstName: string;
  lastName: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _state: BehaviorSubject<State> = new BehaviorSubject<State>(this.initializeState());

  constructor() {
  }

  private initializeState(): State {
    return {
      firstName: localStorage.getItem('firstName') ?? '',
      lastName: localStorage.getItem('lastName') ?? '',
      age: parseInt(localStorage.getItem('age') ?? '0'),
    }
  }
updateState(state: State) {
    this._state.next(state);
    localStorage.setItem('firstName', state.firstName);
    localStorage.setItem('lastName', state.lastName);
    localStorage.setItem('age', state.age+'');
}
  get state() {
    return this._state.asObservable();
  }

}
