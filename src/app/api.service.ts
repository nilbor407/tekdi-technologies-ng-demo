import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // GET all posts
  getAllPosts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // GET post by ID
  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // GET comments of a post by ID
  getPostComments(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/comments`);
  }

  // POST a new post
  createPost(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // POST to a specific post (not standard, but as per your endpoint)
  postToSpecificPost(id: number, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}`, data);
  }

  // PATCH (update) a post by ID
  updatePost(id: number, data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, data);
  }

  // DELETE a post by ID
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
