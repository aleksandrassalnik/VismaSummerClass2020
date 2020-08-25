import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Question } from './iQuestion.interface';

@Injectable({
  providedIn: 'root',
})
  
export class QuestionResourceService {
  private databaseUrl = 'http://localhost:3000/posts';

  public get(id = ''): Observable<Question[]> {
    return this.http
      .get<Question[]>(`${this.databaseUrl}/${id}`);
  }

  public put(data: Partial<Question>): Observable<Question> {
    return this.http.put<Question>(
      `${this.databaseUrl}/${data.id}`,
      data,
      this.httpOptions
    );
  }

  public delete(id: number): Observable<{}> {
    return this.http
      .delete(`${this.databaseUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError('delete')));
  }

  public post(data: Question): Observable<Question> {
    return this.http
      .post<Question>(this.databaseUrl, data, this.httpOptions)
      .pipe(catchError(this.handleError('post', data)));
  }

  private httpOptions = {
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
