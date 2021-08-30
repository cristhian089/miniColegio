import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private env: string;
  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
   }

   registerSubject(subject: any) {
    return this._http.post<any>(this.env + 'subject/registerSubject', subject);
  }

}
