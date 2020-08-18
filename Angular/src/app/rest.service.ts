import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, subscribeOn } from 'rxjs/operators';
import { Database } from './databaseTemplate';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private databaseUrl = 'http://localhost:3000';

  get(): Observable<Database[]> {
    return this.http
      .get<Database[]>(`${this.databaseUrl}/posts`)
      .pipe(catchError(this.handleError<Database[]>('get', [])));
  }

  put(data: Database): void {
    this.http
      .put<void>(
        `${this.databaseUrl}/posts/${data.id}`,
        data,
        this.httpOptions
    ).subscribe();
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
