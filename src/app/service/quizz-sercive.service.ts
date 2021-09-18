import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class QuizzSerciveService {
  api:string='http://localhost:3000';
  testData=new BehaviorSubject<any>({});
  constructor( private _Http: HttpClient) { }
  startQuizz(body:object): Observable<any> {
    const UrlStart = 'http://localhost:3000/api/quiz/start'
    return this._Http.post<any>(UrlStart, body,  httpOptions);
  }
  getQuizzEnd(id: string, correct:any): Observable<any> {
    const UrlEnd = `${this.api}/api/quiz/end`;
    return this._Http.post<any>(UrlEnd,
      {
        "code": "fafafa",
        "userAnswers": correct
      }, httpOptions);
  }
}
