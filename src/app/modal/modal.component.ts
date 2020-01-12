import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../lessons/lessons.component';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { ILesson } from '../shared/interfaces/lesson.model';


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

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
