import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get('https://www.reddit.com/r/aww/.json');
  }
}
