export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
  isFavorite?: boolean;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export type Characters = Character[];

export interface CharactersRes {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: Characters;
}
export type Episodes = Episode[];
export interface Episode{
id:number,
name:string,
air_date:string,
apisode:string,
characters:string[],
url:string,
created:string,
}
