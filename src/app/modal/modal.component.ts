import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../lessons/lessons.component';
import { ILesson } from 'src/app/classes/lesson.class';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public lesson: ILesson = {
    topic: '',
    date: '',
    lecturer: '',
    editStatus: false
  }

  constructor(
    private localStorageService: LocalStorageService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
