import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LessonDetailsComponent} from "./lesson-details/lesson-details.component";
import {LessonListComponent} from "./lesson-list/lesson-list.component";
import {HomeComponent} from "./home/home.component";
import {LessonFormComponent} from "./lesson-form/lesson-form.component";
import {LoginComponent} from "./login/login.component";
import {CanNavigateToAdminGuard} from "./can-navigate-to-admin.guard";
import {PersonalListComponent} from "./personal-list/personal-list.component";
import {CourseListComponent} from "./course-list/course-list.component";
import {CourseDetailsComponent} from "./course-details/course-details.component";





const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'personalarea', component: PersonalListComponent},
  {path: 'lessons', component: LessonListComponent},
  {path: 'lessons/:id', component: LessonDetailsComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'courses/:id', component: CourseDetailsComponent},
  {path: 'admin', component: LessonFormComponent, canActivate: [CanNavigateToAdminGuard]},
  {path: 'admin/:id', component: LessonFormComponent, canActivate: [CanNavigateToAdminGuard]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanNavigateToAdminGuard]
})

export class AppRoutingModule {  }
