import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-episodes',
  imports: [CommonModule],
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAllEpisodes(); 
  }

  loadAllEpisodes(): void {
    let allEpisodes: any[] = [];
    let page = 1;

    const loadPage = () => {
      
      this.http.get(`https://rickandmortyapi.com/api/episode?page=${page}`).subscribe((data: any) => {
        allEpisodes = allEpisodes.concat(data.results); 
        if (data.info.next) {
          
          page++;
          loadPage();
        } else {
          
          this.episodes = allEpisodes;
        }
      });
    };

    loadPage(); 
  }
}
