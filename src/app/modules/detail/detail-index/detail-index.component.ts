import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/models/movie';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-detail-index',
  templateUrl: './detail-index.component.html',
  styleUrls: ['./detail-index.component.scss']
})
export class DetailIndexComponent implements OnInit {

  constructor(
      private _activityRoute: ActivatedRoute,
      private _http: HttpClient,
      private _movieService: MovieDataService
      ) { }

  movieDetail?: IMovie | null;

      fetchMovieDetail(): void {
        const movieId = this._activityRoute.snapshot.params.id
        this._http.get('https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim',
        {
          params:{ 
            maPhim:movieId
            },
          headers: 
            {
              TokenCybersoft:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyOS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDM0MTQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0MzU2MjAwMH0.N1IDGkovxIU1E2CjtI_QtEJksOO3lxZxuIwXABaa45w'
            }
        }).subscribe(
          (res: any) => {
            // console.log(res);
            // cập nhật dữ liệu trên service
            this._movieService.setMovieDetail(res.content);
          },
          error => {
            console.log(error);
          }
        ) 
      }
  ngOnInit(): void {
    // console.log(movieId)
    
    //task
    //1.tạo thêm 1 dữ liệu mới trên movie data service để lưu movieDetail
    //2.call api '/api/QuanLyPhim/LayThongTinPhim' gửi id phim lên BE và lấy chi tiết phim về
    this.fetchMovieDetail()
    //3.lưu chi tiết phim lên service và lấy xuống dùng
    this._movieService.movieDetail.subscribe((val: IMovie | null) => {
      this.movieDetail = val;
    })
    //4.render một số  thông tin của phim ra màn hình : ten, hinh anh, mô tả
  }

}
