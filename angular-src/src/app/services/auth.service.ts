import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http:Http) { }

  uploadNewPost(data,file){
      var formData = new FormData;


      for(var a in data){
        formData.append(a,data[a]);
      }
      formData.append('file',file);
      this.http.post('news/add', formData).map(res => res.json()).subscribe((data)=>{
        console.log(data);
      });
  }

  loadNews(count){
    var sc = {count:count};
    var headers = new Headers;
    headers.append('Content-Type','application/json');
    return this.http.post("news/select", sc , {headers:headers}).map(res => res.json());
  }

}
