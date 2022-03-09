import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Workout } from '../../models/workout';

@Component({
  selector: 'app-grid-jogging',
  templateUrl: './grid-jogging.component.html',
  styleUrls: ['./grid-jogging.component.css']
})
export class GridJoggingComponent implements OnInit {
  @Input() joggingData: Array<Workout>;
  @Output() recordDeleted = new EventEmitter<number>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<number>();
 
  constructor() { }


  public deleteRecord(id) {
    this.recordDeleted.emit(id);
  }

  public editRecord(id) {
    this.editClicked.emit(id);

  }

  public newRecord() {
    this.newClicked.emit();
  }

  ngOnInit(): void {
  }
}
