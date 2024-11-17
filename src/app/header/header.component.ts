import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../character.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  characters: Character[] = [];
  filteredCharacters: Character[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Character[]>('assets/character.json').subscribe(
      (data) => {
        this.characters = data;
        this.filteredCharacters = [];
      },
      (error) => {
        console.error('Error fetching characters:', error);
      }
    );
  }

  onSearch(): void {
    const searchTermLower = this.searchTerm.toLowerCase().trim();
    if (searchTermLower) {
      this.filteredCharacters = this.characters.filter(character =>
        character.name.toLowerCase().startsWith(searchTermLower)
      );
    } else {
      this.filteredCharacters = [];
    }
  }
}
