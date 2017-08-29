import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Face } from '../models/face';
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class FaceService {
  private faceSimilarUrl: string = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/findsimilars";
  private API_KEY: string = "71f21eff5eab43c694a46d4999dca8b9";

  constructor(private http: Http) { }

  getSimilarFaces(capturedFaceId: string): Observable<Face[]> {
    const headers = new Headers({
      'Content-type': 'application/json',
      'Ocp-Apim-Subscription-Key': this.API_KEY
    })
    const options = new RequestOptions({ headers });

    return this.http.post(this.faceSimilarUrl, 
      { faceId: capturedFaceId,
        faceListId: "sample_list",
        maxNumOfCandidatesReturned: 5,
        mode: "matchFace" }, 
        options)
      .map(data => data.json())
      .do(result => console.log(result));
  }
}
