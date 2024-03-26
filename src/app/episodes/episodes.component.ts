import { Component, OnInit, inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { CharacterComponent } from '../characters/character/character.component';
import { EpisodeComponent } from './episode/episode.component';
import { RouterOutlet } from '@angular/router';
import { EpisodeService } from './services/episode.service';
import { Episodes } from '../types';

@Component({
  selector: 'app-episodes',
  standalone: true,
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss',
  imports: [AppComponent, CharacterComponent, EpisodeComponent, RouterOutlet],
})
export class EpisodesComponent implements OnInit {
  readonly episodeService = inject(EpisodeService);
  episodes!: Episodes;

  ngOnInit(): void {
    this.episodeService
      .getEpisodes()
      .subscribe((response) => (this.episodes = response.results));
  }
}
