import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CharacterComponent } from "../characters/character/character.component";
import { EpisodeComponent } from "./episode/episode.component";

@Component({
    selector: 'app-episodes',
    standalone: true,
    templateUrl: './episodes.component.html',
    styleUrl: './episodes.component.scss',
    imports: [AppComponent, CharacterComponent, EpisodeComponent]
})
export class EpisodesComponent {
episodes: any;

}
