import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode, EpisodeRes } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

private readonly client = inject (HttpClient);

getEpisodes(): Observable<EpisodeRes> {
  return this.client.get<EpisodeRes>(
    'https://rickandmortyapi.com/api/episode',
  );
}
}
