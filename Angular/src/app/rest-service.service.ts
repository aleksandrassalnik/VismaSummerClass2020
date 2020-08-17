import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Database } from './database';

@Injectable({
  providedIn: 'root',
})
export class RestServiceService {
  private databaseUrl = 'http://localhost:3000';

  get(): Observable<Database[]> {
    return this.http.get<Database[]>(this.databaseUrl).pipe();
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
