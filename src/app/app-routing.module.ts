import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component'
import { PostPageComponent } from './post-page/post-page.component'

const routes: Routes = [
  {path:'page', component:PostPageComponent},
  {path:'', component:PostsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
