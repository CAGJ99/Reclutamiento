import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { config } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) { }


  getComics(): Observable<any> {

    return this.http.get<any>(`${config.comicsUrl}`)
  

 }
searchComic(id:string):Observable<any>{
  return this.http.get<any>(`${config.comicsSearch}${id}?ts=1&apikey=a2e4026a13d03bb3a7d85818d19c066f&hash=fc9556ac2fe2c94afffe9c7fed438736`)
}
  
}
