import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { config } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class CreatorsService {

  constructor(private http: HttpClient) { }


  getCreators(): Observable<any> {

    return this.http.get<any>(`${config.creatorsUrl}`)
  

 }

  
}
