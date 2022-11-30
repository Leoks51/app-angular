import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Remember } from './remember.model';
import { Router } from '@angular/router';

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

  readById(id: string): Observable<Remember> {
    const dataUrl = `${this.url}/${id}`;
    return this.http.get<Remember>(dataUrl)
  }

  update(remember: Remember): Observable<Remember> {
    const dataUrl = `${this.url}/${remember.id}`;
    return this.http.put<Remember>(dataUrl, remember)
  }


  delete(id: string): Observable<Remember>{
    const base = `${this.url}`;
    return this.http.delete<Remember>(base);
  }

  cancel(){
    this.router.navigate(['/remembers'])
  }
  }


