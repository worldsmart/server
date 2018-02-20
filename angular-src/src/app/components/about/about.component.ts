import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

file:any;
header:String;
topic:String;
poststext:String;

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

newImg(event){
  this.file = event.target.files[0];
  if(this.file.type == "image/jpeg" || this.file.type == "image/png" || this.file.type == "image/gif" || this.file.type == "image/jpg"){
    document.getElementById('fileHelp').innerHTML = "Image is suitable!";
    document.getElementById('fileHelp').className = "form-text text-muted";
  }
  else{
    document.getElementById('fileHelp').innerHTML = "Jpg,Png or Gif images only!";
    document.getElementById('fileHelp').className = "custom005";
    this.file = 'err';
    return false;
  }
  if(this.file.size > 1024*1024*3){
    document.getElementById('fileHelp').innerHTML = "Max size is 3Mb!";
    document.getElementById('fileHelp').className = "custom005";
    this.file = 'err';
  }
}

newPost(){
  if(this.file == 'err'){
    return false;
  }
  var data = {
    header:this.header,
    topic:this.topic,
    poststext:this.poststext,
  }
  this.auth.uploadNewPost(data,this.file);
  }
}
