import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LessonDetailsComponent} from "./lesson-details/lesson-details.component";
import {LessonListComponent} from "./lesson-list/lesson-list.component";
import {HomeComponent} from "./home/home.component";
import {LessonFormComponent} from "./lesson-form/lesson-form.component";



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lessons', component: LessonListComponent},
  {path: 'lessons/:id', component: LessonDetailsComponent},
  {path: 'admin', component: LessonFormComponent},
  {path: 'admin/:id', component: LessonFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {  }
