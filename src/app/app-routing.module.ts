import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';

const routes: Routes = [
  { path: '', component: UserNavComponent },
  { path: 'useredit/:id', component: UserEditComponent },
  // { path: '**', component: comp }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
