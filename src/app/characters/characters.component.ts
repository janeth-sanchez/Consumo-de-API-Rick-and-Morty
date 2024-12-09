import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  image: string;
}

@Component({
  selector: 'app-characters',
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  nextPage: string | null = 'https://rickandmortyapi.com/api/character';  

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   
    if (this.nextPage) {
      this.loadCharacters(this.nextPage);
    }
  }

  loadCharacters(url: string): void {
    this.http.get<any>(url).subscribe((data) => {
      this.characters = this.characters.concat(data.results);  
      this.nextPage = data.info.next;  
      if (this.nextPage) {
        this.loadCharacters(this.nextPage);  
      }
    });
  }
}

