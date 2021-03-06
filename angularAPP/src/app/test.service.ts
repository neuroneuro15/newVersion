import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Request } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {

  private apiUrl:string;
  constructor(private http: Http) {
    this.apiUrl ='https://easy-peasy.herokuapp.com/analyze';

 }

 getTextAnalysis(data){
   console.log(data);
   var obj={};
    obj['text'] = data;
      var requestoptions = new RequestOptions({
       method: RequestMethod.Post,
       url: this.apiUrl,
      body: obj
     })
    return this.http.request(new Request(requestoptions))
    .map((res: Response) => {
      if (res) {
          return res.json();
      }
    });
  }
}
