import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path:'post_details/:id',
        loadComponent: () => import('./post-details/post-details.component').then(m => m.PostDetailsComponent)
    },
    {
        path:'create-post',
        loadComponent: () => import('./create-post/create-post.component').then(m => m.CreatePostComponent)
    },
    {
        path:'edit_post/:id',
        loadComponent: () => import('./edit-post/edit-post.component').then(m => m.EditPostComponent)
    },
    { 
        path: '**', 
        redirectTo: '' 
    }
];
