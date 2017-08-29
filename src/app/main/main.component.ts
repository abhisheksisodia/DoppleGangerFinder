import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Http, Request } from '@angular/http';
import { FaceService } from "../services/face.service";
import { DbService } from "../services/db.service";
import { Face } from "../models/face";
import { Image } from "../models/image";
import { Match } from "../models/match";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public captured:any = false
  public webcam: any
  options: any;
  base64:any;
  result: string;
  similarFaces: Face[];
  images: Image[];
  matches: Match[];
  showMatches: Boolean = false;
  color = 'accent';
  mode = 'determinate';

  constructor(private route: ActivatedRoute, 
    private http:Http, 
    private face: FaceService,
    private db: DbService){
    this.options = {
      audio: false,
      video: true,
      width: 540,
      height: 380
    };
  }

  ngOnInit() {
    this.captured = false;
    this.db.getImages().then(images => this.images = images);
  }

  captureImage(){
    return this.webcam.getBase64()
    .then(base=>{
      this.captured = new Date()
      this.base64 = base
      setTimeout(()=>this.webcam.resizeVideo(), 0)
    })
    .catch( e=>console.error(e) )
  }

  async fetchSimilarFaces() {
    // passing test face id for now
    this.face.getSimilarFaces("15f818b4-6350-4800-a152-63657201ef37")
      .subscribe(data => {
        this.similarFaces = data;
      })
  }

  showResults() {
    this.matches = [];
      for (var i=0; i < this.similarFaces.length; i++) {
        for (var j = 0; j < this.images.length; j++) {
          if(this.similarFaces[i].persistedFaceId == this.images[j].id) {
              this.matches.push( {
                id: this.similarFaces[i].persistedFaceId, 
                url: this.images[j].url,
                confidence: Math.round(this.similarFaces[i].confidence * 100),
                firstName: this.images[j].firstName,
                lastName: this.images[j].lastName,
                position: this.images[j].position,
                company: this.images[j].company
              });
          }
        }
      }
      this.showMatches = true;
  }
 
  retakeImage() {
    this.captured = false;
  }

  onCamError(err){}
 
  onCamSuccess(){}
}
