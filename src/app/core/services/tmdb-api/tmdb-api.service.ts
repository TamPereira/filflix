import { MovieTvBase } from './../../models/movie-tv-base';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


type ApiResponse = {page: number; results: MovieTvBase[] };

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {
  baseUrl = 'https://api.themoviedb.org/3/';

  options = {
    api_key: 'f92ee6f458d598947524a82e1e661653',
    language: 'pt-br'
  }

  constructor(private http: HttpClient) { }

  trending(): Observable<MovieTvBase[]>{
type ApiResponse = {page: number; results: MovieTvBase[]};
return this.http.get<ApiResponse>(`${this.baseUrl}/trending/all/week?api`, {
      params: this.options,
    }).pipe(map(data => data.results));
  }

    search(query: string): Observable<MovieTvBase[]> {
      return this.http.get<ApiResponse>(`${this.baseUrl}/search/multi`, {
        params: {
          ...this.options,
          include_adult: false,
          query: query,
        },
      })
      .pipe(map((data) => data.results));
    }

  }
