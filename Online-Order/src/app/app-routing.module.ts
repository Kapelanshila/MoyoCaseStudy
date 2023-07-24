import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { ClientPortalComponent } from './client-portal/client-portal.component';
import { AuthGuard } from './_helpers/general.auth.guard';

const routes: Routes = [{ path: 'login', component: LoginComponent},
{ path: 'client-portal', component: ClientPortalComponent,canActivate: [AuthGuard]},
{path: '', redirectTo: 'login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
