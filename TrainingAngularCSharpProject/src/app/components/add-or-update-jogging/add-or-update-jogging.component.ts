import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Workout } from '../../models/workout';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-add-or-update-jogging',
  templateUrl: './add-or-update-jogging.component.html',
  styleUrls: ['./add-or-update-jogging.component.css']
})
export class AddOrUpdateJoggingComponent implements OnInit {

  @Output() joggingCreated = new EventEmitter<Workout>();
  @Input() joggingInfo: Workout;

  public buttonText = 'Save';

  constructor() {
    this.clearJoggingInfo();
    console.log(this.joggingInfo.date);
  }

  ngOnInit() {

  }

  private clearJoggingInfo = function () {
    // Create an empty jogging object
    this.joggingInfo = {
      id: undefined,
      date: undefined,
      distanceInMiles: 0,
      timeInMinutes: 0
    } as Workout;
  };

  public addOrUpdateJoggingRecord = function (event) {
    this.joggingCreated.emit(this.joggingInfo);
    this.clearJoggingInfo();
  };

}
