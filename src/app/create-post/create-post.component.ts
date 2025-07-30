import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent implements OnInit {
  postForm!: FormGroup;
  submitted = false;
  response: any = null;

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.postForm.invalid) return;

    this.api.createPost(this.postForm.value).subscribe(
      (res) => {
        this.response = res;
        this.postForm.reset();
        this.submitted = false;
      },
      (err) => {
        console.error('Post creation failed', err);
      }
    );
  }
}
