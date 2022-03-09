import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workout } from '../models/workout';
import { Observable } from 'rxjs';

@Injectable()
export class WorkoutService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:5054/api/workouts';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin':'*' });
  }

  public get():Observable<Workout[]>{
    // Get all jogging data
    return this.http.get<Workout[]>(this.accessPointUrl, { headers: this.headers });
  }

  public getById(id): Observable<Workout> {
    // Get all jogging data
    return this.http.get<Workout>(this.accessPointUrl + '/' + id, { headers: this.headers });
  }

  public add(payload) {
    return this.http.post(this.accessPointUrl, payload, { headers: this.headers });
  }

  public remove(payload) {
    return this.http.delete(this.accessPointUrl + '/' + payload.id, { headers: this.headers });
  }

  public update(payload) {
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload, { headers: this.headers });
  }

}
