import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CustomResponse } from '../model/custom-response';
@Injectable({ providedIn: 'root' })
export class TracabiliteService {

  private readonly apiUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  tracabilites$ = <Observable<CustomResponse>>
    this.http.get<CustomResponse>(`${this.apiUrl}/v1/asf/tracabilites`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );
  
      private handleError(error: HttpErrorResponse):Observable <never> {
        console.log(error)
        return throwError(()=> `An error occured - Error code :  ${error.status}`);
       }
}
