import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Remember } from './remember.model';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RememberService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  url= "http://localhost:3000/remembers"

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  create(remember: Remember): Observable<Remember>{
    return this.http.post<Remember>(this.url, remember)
  }

  read(): Observable<Remember[]>{
    return this.http.get<Remember[]>(this.url)

  }

  //readById(id: string): Observable<Remember> {
  //  const dataUrl = `${this.url}/${id}`;
  //  return this.http.get<Remember>(dataUrl)
 // }
  readById(id: any): Observable<Remember>{
    return this.http.get<Remember>(`${this.url}/${id}`)
  }

  update(remember: Remember): Observable<Remember> {
    const dataUrl = `${this.url}/${remember.id}`;
    return this.http.put<Remember>(dataUrl, remember)
  }

  delete(id: number): Observable<unknown> {
    const url = `${this.url}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(

      );
  }

  cancel(){
    this.router.navigate(['/remembers'])
  }
  }


