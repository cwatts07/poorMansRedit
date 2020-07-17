import { Component, OnInit } from '@angular/core';
import { RedditApiService } from '../redit-api.service'
import { RedditResponse, RedditChildren } from '../redit-response'
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor(private reddit: RedditApiService) { }
  posts: RedditChildren[];
  ngOnInit(): void {
    this.reddit.getPosts().subscribe((response: RedditResponse)=>{
      this.posts = response.data.children
    })
  }
  removePost(index){
    this.posts.splice(index,1);
  }
}
