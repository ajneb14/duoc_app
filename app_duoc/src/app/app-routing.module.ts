import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'home-alumno', loadChildren: () => import('./pages/home-alumno/home-alumno.module').then(m => m.HomeAlumnoPageModule) },
  { path: 'historial-asistencia', loadChildren: () => import('./pages/historial-asistencia/historial-asistencia.module').then(m => m.HistorialAsistenciaPageModule) },
  { path: 'qr-scanner', loadChildren: () => import('./pages/qr-scanner/qr-scanner.module').then(m => m.QrScannerPageModule) },
  { path: 'change-password', loadChildren: () => import('./pages/change-password/change-password.module').then(m => m.ChangePasswordPageModule) },
  { path: 'docenteqr', loadChildren: () => import('./pages/docenteqr/docenteqr.module').then(m => m.DocenteqrPageModule) },
  { path: 'asistencia', loadChildren: () => import('./pages/asistencia/asistencia.module').then(m => m.AsistenciaPageModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
