import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReditApiService {

  constructor(private http: HttpClient) { }

  getPosts(){
    this.http.get('https://www.reddit.com/r/aww/.json')
  }
}
