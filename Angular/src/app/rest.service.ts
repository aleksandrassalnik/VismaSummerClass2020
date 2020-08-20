import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Database } from './databaseTemplate';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private databaseUrl = 'http://localhost:3000/posts';

  get(): Observable<Database[]> {
    return this.http
      .get<Database[]>(this.databaseUrl)
      .pipe(catchError(this.handleError<Database[]>('get', [])));
  }

  put(data: Database): Observable<Database> {
    return this.http.put<Database>(
      `${this.databaseUrl}/${data.id}`,
      data,
      this.httpOptions
    );
  }

  delete(id: number): Observable<{}> {
    return this.http
      .delete(`${this.databaseUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError('delete')));
  }

  post(data: Database): Observable<Database> {
    return this.http
      .post<Database>(this.databaseUrl, data, this.httpOptions)
      .pipe(catchError(this.handleError('post', data)));
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
