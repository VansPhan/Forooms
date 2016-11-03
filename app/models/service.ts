import { Injectable } from '@angular/core';
import { Comment } from './comments';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {

	constructor(private http: Http) {}
	
	getComments() {
		return this.http.get('http://localhost:1337/comments')
			.map(response => <Comment[]>response.json());
	}

	comments = [];

}