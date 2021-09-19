import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/models/movie';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit, AfterViewInit, OnChanges {

  constructor(
    private _movieService: MovieDataService,
    private _http: HttpClient
    ) { }

  movieList: IMovie[] = []

  fetchMovie(): void {
    this._http.get('https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim',
    {
      params:
        { maNhom:'GP01'},
      headers: 
        {
          TokenCybersoft:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyOS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDM0MTQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0MzU2MjAwMH0.N1IDGkovxIU1E2CjtI_QtEJksOO3lxZxuIwXABaa45w'
        }
    }).subscribe(
      (res: any) => {
        // console.log(res);
        // cập nhật dữ liệu trên service
        this._movieService.setMovieList(res.content);
      },
      error => {
        console.log(error);
      }
    ) 
  }

  handleDelete(): void {
    this._movieService.deleteMovie(1288)
  }

  ngOnInit(): void {
    // call API fetch movieList()
    this.fetchMovie()

    this._movieService.movieList.subscribe((value) => {
      this.movieList = value;
    })
    // console.log('did mount cua angular: oninit')
    // //promise: axios
    // const promise = new Promise((resolve, reject) => {
    //   //call API function
    //   setTimeout(() => {
    //     // resolve('data')
    //     reject('error')
    //   },2000)
    // })

    // //fontend trả về: axios () => promise
    // promise.then((res) => {
    //   console.log(res,'data BE tra ve')
    // })
    // .catch((err) => {
    //   console.log(err)
    // })


    // //Observable
    // const observable = new Observable((resolver) => {
    //   setTimeout(() => {
    //     // resolver.error('error 1')
    //     resolver.next('data 1')
    //     resolver.next('data 2')
    //     resolver.next('data 3')
    //   }, 2000)
    // })

    // observable.subscribe(
    //   res => {
    //     console.log(res)
    //   },
    //   error => {
    //     console.log(error)
    //   }
    // )
  }
//được chạy sau khi render xong
  ngAfterViewInit(){
    // console.log('view init')
  }

  ngOnChanges(){
    
  }
  
}
