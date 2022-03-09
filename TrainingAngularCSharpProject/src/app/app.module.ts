import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddOrUpdateJoggingComponent } from './components/add-or-update-jogging/add-or-update-jogging.component';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutService } from './services/workout.service';
import { HomeComponent } from './components/home/home.component';
import { GridJoggingComponent } from './components/grid-jogging/grid-jogging.component';
import { FormsModule } from '@angular/forms';
import { DatePipe, DecimalPipe } from '@angular/common';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridJoggingComponent,
    AddOrUpdateJoggingComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [WorkoutService, DatePipe  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
