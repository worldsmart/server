import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

script:any;

  constructor(private auth:AuthService) {

  }

  ngOnInit() {
    this.auth.loadNews(5).subscribe((data)=>{
    var el = document.getElementById('container');
    for(var a in data){
      var m = data[a];
      el.innerHTML += '<div class="card mb-3" style="margin-top:3vh;">';
      el.innerHTML += '<h3 class="card-header">'+m.head+'</h3>';
      el.innerHTML += '<div class="card-body"><h5 class="card-title">'+m.topic+'</h5></div>';
      el.innerHTML += '<img style="height: 200px; width: 100%; display: block;" src="'+m.img_name+'" alt="Card image">';
      el.innerHTML += '<div class="card-body"><p class="card-text">'+m.text+'</p></div>';
      el.innerHTML += '<div class="card-body"><a href="#" class="card-link">Card link</a><a href="#" class="card-link">Another link</a></div>';
      el.innerHTML += '<div class="card-footer text-muted">'+m.date+'</div>';
      el.innerHTML += '</div>';
    }
      });
  }



}
