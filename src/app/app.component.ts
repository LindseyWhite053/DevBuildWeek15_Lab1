import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialposts';

  newPost: Post = {
    title: '',
    thought: ''
  }

  postFormVisible: boolean = false;

  posts: Post[] =[ ]

  
  viewForm(){
    this.postFormVisible = true;
  }
  
  addPost(){
    let nextPost: Post = {
      title: this.newPost.title,
      thought: this.newPost.thought
    }

    this.posts.push(nextPost);
    this.newPost.title = '';
    this.newPost.thought = '';
  }
}
