import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
  { path:"", redirectTo: "home", pathMatch:"full"  },
  { path: 'home', component: HomeComponent },
  { path: 'p1', component: Page1Component },
  { path: 'p1/:id', component: Page1Component },
  { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes , 
    // {enableTracing: true}
    // {
    //   preloadingStrategy: PreloadAllModules
    // }
)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
