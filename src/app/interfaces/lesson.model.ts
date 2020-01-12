import { ILesson } from '../classes/lesson.class';

export class Lesson implements ILesson {
    constructor(
       public topic: string,
       public date: string,
       public lecturer: string,
       public editStatus:boolean
    ) { }
}