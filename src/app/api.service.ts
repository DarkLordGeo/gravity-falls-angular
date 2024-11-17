import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character.model';  


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = 'assets/character.json';

  constructor(private http: HttpClient) {}

  getCharacters(take: number = 5): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);  
  }
}
