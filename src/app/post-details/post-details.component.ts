import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-post-details',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent 
{
  postInfo:any;
  comments:any;
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){
    this.activatedRoute.params.subscribe((urlData:any)=>{
      
      console.log("Url Data",urlData);

      this.api.getPostById(urlData.id).subscribe((res:any)=>{
        console.log(res);
        this.postInfo = res;
      })
      this.api.getPostComments(urlData.id).subscribe((res:any)=>{
        console.log(res);
        this.comments = res;
      })


    })
  }

}
