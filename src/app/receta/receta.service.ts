import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Receta } from './receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  apiUrl = 'https://gist.githubusercontent.com/VivianGomez/e65c117a4809355fbb53c37cb8fe1d44/raw/';

  constructor(private http: HttpClient) { }

  getRecetas(): Observable<Receta[]>{
    return this.http.get<Receta[]>(this.apiUrl).pipe(catchError((err) => throwError(() => new Error('error en el servicio'))));
  }
}
