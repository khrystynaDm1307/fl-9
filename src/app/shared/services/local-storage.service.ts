import { Injectable } from '@angular/core';
import { ILesson } from '../interfaces/lesson.model';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  lessons: Array<ILesson> = []

  constructor() { }

  public getLocalStorageData(): Array<ILesson> {
    if (localStorage.getItem('lessons')) {
      this.lessons = JSON.parse(localStorage.getItem('lessons'));
    }
    return this.lessons;
  }

  public updateLocalStorage(lessons: Array<ILesson>): void {
    localStorage.removeItem('lessons');
    localStorage.setItem(`lessons`, JSON.stringify(lessons));
  }
}