import { Component } from '@angular/core';
import { Comment } from './models/comments';
import { CommentService } from './models/service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'comments',
  templateUrl: 'app/comments.html',
  providers: [ CommentService, HTTP_PROVIDERS ]
})

class CommentsComponent {
	comments: Comment[];

	constructor(private commentService: CommentService) {
		this.comments = commentService.comments;
	}

	ngOnInit() {
		this.commentService.getComments()
			.subscribe(comments => {
				this.comments = this.commentService.comments;
			})
	}
}

export { CommentsComponent };