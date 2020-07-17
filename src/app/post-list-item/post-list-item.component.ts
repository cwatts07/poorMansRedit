import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RedditChildren as Children } from '../redit-response'

@Component({
  selector: 'post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() singlePost: Children;
  @Output() onRemove = new EventEmitter<void>()
  constructor() { }
  

  ngOnInit(): void {
  }
  hide(){
    this.onRemove.emit()
  }
}
