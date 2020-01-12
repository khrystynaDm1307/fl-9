import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ILesson } from 'src/app/classes/lesson.class';
import { LocalStorageService } from '../services/local-storage.service';
export interface DialogData {
  topic: string;
  date: string;
  lecture: string
}
@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  lessonsArray: Array<ILesson> = []
  constructor(public dialog: MatDialog,
    private localStorageService: LocalStorageService) {
    this.lessonsArray = this.localStorageService.getLocalStorageData()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.lessonsArray.push(result);
        this.localStorageService.updateLocalStorage(this.lessonsArray);
      }
    });
  }

  ngOnInit() {
  }

  public edit(i: number) {
    this.lessonsArray[i].editStatus = true;
  }

  public saveEdit(i: number) {
    this.lessonsArray[i].editStatus = false;
    this.localStorageService.updateLocalStorage(this.lessonsArray);
  }

  public delete(i: number) {
    this.lessonsArray.splice(i, 1);
    this.localStorageService.updateLocalStorage(this.lessonsArray);
  }
}
