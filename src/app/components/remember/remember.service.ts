import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Remember } from './remember.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RememberService {
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

  cancel(){
    this.router.navigate(['/remembers'])
  }


}
