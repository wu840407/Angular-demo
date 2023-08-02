import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseMatTableComponent } from './use-mat-table/use-mat-table.component';
import { UseTableComponent } from './use-table/use-table.component';

export const routes: Routes = [
  {path: "useTable", component: UseTableComponent, title: "Table"}, 
  {path: "useMatTable", component: UseMatTableComponent, title: "MatTable"}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
