import { Component } from '@angular/core';
import { Comment } from './models/comments';

@Component({
  selector: 'comments',
  templateUrl: 'app/comments.html'
})

class CommentsComponent {
	comments: Comment[];

	ngOnInit() {
		this.comments = [];
		this.comments.push({id: 1, text: "Hello?"});
	}
}

export { CommentsComponent };