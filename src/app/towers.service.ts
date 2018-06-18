import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, interval } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

import { Tower } from './shared/tower';

const httpOptions = {
  headers: new HttpHeaders()
};

// Для localhost:3000
// httpOptions.headers.append('Access-Control-Allow-Origin', '*');
httpOptions.headers.append('Content-Type', 'application/json');
// httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

@Injectable({
  providedIn: 'root'
})
export class TowersService {
  // нормально не работает из-за кAccess-Control-Allow-Origin и SSL
  // private towertsUrl = `http://localhost:3000/api/towers?time=${Date.now()}`;
  private towertsUrl = 'api/towers';

  constructor(private http: HttpClient) {
  }

  getTowers(): Observable<Tower[]> {
    return this.http.get<Tower[]>(this.towertsUrl, httpOptions)
      .pipe(
        // вывожу в консоль пришедшие данные
        tap(towers => console.log(towers)),
        catchError(this.handleError<any>('getTowers'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('error', operation, error);
      return of(result as T);
    };
  }
}
