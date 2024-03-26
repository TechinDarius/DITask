import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CharactersRes, Episode } from '../../types';
import { Router } from '@angular/router';


@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss'
})
export class EpisodeComponent {
  episode = input<Episode>();
  private readonly router = inject(Router);

  getComputedStyles() {
    return {
      ['background-image']: `url(${this.episode()?.url})`,
      ['background-size']: `cover`,
    };
  }

  onDetailsClick(): void {
    this.router.navigate(['episodes', this.episode()?.id]);
  }

}
