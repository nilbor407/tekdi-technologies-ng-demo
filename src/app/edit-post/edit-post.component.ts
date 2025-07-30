import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit {
  postForm!: FormGroup;
  submitted = false;
  postId!: number;
  message = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });

    // Get ID from route or manually set it
    this.postId = Number(this.route.snapshot.paramMap.get('id')) || 1;

    // Load post details
    this.api.getPostById(this.postId).subscribe((post) => {
      this.postForm.patchValue({
        title: post.title,
        body: post.body
      });
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.postForm.invalid) return;

    this.api.updatePost(this.postId, this.postForm.value).subscribe((res) => {
      // this.message = 'Post updated successfully!';
      this.router.navigate(['/']);
    });
  }
}
