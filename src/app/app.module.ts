import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Router, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { loginComponent } from "./components/login/login.component";
import { navBarComponent } from "./components/navbar/navbar.component";
import { pageNotFoundComponent } from "./components/pageNotFound/pageNotFound.component";
import { postComponent } from "./components/post/post.component";
import { postFormComponent } from "./components/post-form/post-form.component";
import { postsListComponent } from "./components/posts-list/posts-list.component";
import { registerComponent } from "./components/register/register.component";

import { AuthService } from "./services/auth.service";
import { PostService } from "./services/posts.service";
import { StoreService } from "./services/store.service";

const approute: Router = [
  { path: "", redirectTo: "/posts", pathMatch: "full" },
  { path: "posts", component: postsListComponent },
  { path: "login", component: loginComponent },
  { path: "register", component: registerComponent },
  { path: "**", component: pageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(approute),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    loginComponent,
    navBarComponent,
    pageNotFoundComponent,
    postComponent,
    postFormComponent,
    postsListComponent,
    registerComponent
  ],
  providers: [AuthService, PostService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
