import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { RouterModule, Routes } from "@angular/router";

const authRoutes: Routes= [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
  
];

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthModule {}