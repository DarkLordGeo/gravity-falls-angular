import { Component } from '@angular/core';
import { Character } from '../character.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  characters: Character[] = [];
  constructor(private http: HttpClient){}
  
  ngOnInit(): void{
    this.http.get<Character[]>("assets/character.json").subscribe(
      (data) => {
        this.characters = data
      },
      (error) =>{
        console.error("error fetching", error);
      }
    )
  }
}
