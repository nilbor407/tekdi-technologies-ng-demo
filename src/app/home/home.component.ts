import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  allPosts:any;
  constructor(private api:ApiService){}
  ngOnInit(){
    this.api.getAllPosts().subscribe((res:any)=>{
      this.allPosts = res;
      console.log(res);
    })
  }
  deletePost(id:number)
  {
     if(!confirm("Are you sure you want to delete this post?")) return;

    this.api.deletePost(id).subscribe((res:any)=>{
      this.allPosts = this.allPosts.filter((post:any) => post.id !== id);
    })
  }
}
