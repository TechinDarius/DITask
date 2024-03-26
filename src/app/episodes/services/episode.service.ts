import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

private readonly client = inject (HttpClient);

getEpisodes(): Observable<Episode> {
  return this.client.get<Episode>(
    'https://rickandmortyapi.com/api/episode',
  );
}
}
