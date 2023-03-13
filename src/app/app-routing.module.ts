import { ConfiguracionGuard } from './guardianes/configuracion.guard';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';

const routes: Routes = [
  {path:'', component: TableroComponent,canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'registrarse', component:RegistroComponent,canActivate:[ConfiguracionGuard]},
  { path: 'configuracion', component: ConfiguracionComponent, canActivate: [AuthGuard] },
  { path: 'cliente/editar/:id', component: EditarClienteComponent, canActivate: [AuthGuard] },
  {path:'**', component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
