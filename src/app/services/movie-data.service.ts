import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  movieList = new BehaviorSubject<IMovie[]>([
    
  ]);

  movieDetail = new BehaviorSubject<IMovie | null > (null)

  deleteMovie(id:number){
    // const index = this.movieList.findIndex((item) => item.maPhim === id);
    // this.movieList.splice(index, 1);


    //or lay id = filter kieu tham tri
    let movieListData =  this.movieList.getValue();
    movieListData = movieListData.filter((item) => item.maPhim !== id)
    this.movieList.next(movieListData)
  }

  setMovieList(data: IMovie[]){
    this.movieList.next(data)
  }

  setMovieDetail(data: IMovie){
    this.movieDetail.next(data)
  }

  constructor() {
    
  }
}
