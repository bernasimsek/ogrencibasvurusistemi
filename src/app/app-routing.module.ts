import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [AuthGuard]
  },
  
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'yaz-okulu-basvuru',
    loadChildren: () => import('./yaz-okulu-basvuru/yaz-okulu-basvuru.module').then( m => m.YazOkuluBasvuruPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),

  },
  {
    path: 'yatay-gecis-basvuru',
    loadChildren: () => import('./yatay-gecis-basvuru/yatay-gecis-basvuru.module').then( m => m.YatayGecisBasvuruPageModule)
  },
  {
    path: 'dgs-basvuru',
    loadChildren: () => import('./dgs-basvuru/dgs-basvuru.module').then( m => m.DgsBasvuruPageModule)
  },
  {
    path: 'cap-basvuru',
    loadChildren: () => import('./cap-basvuru/cap-basvuru.module').then( m => m.CapBasvuruPageModule)
  },
  {
    path: 'ders-intibaki',
    loadChildren: () => import('./ders-intibaki/ders-intibaki.module').then( m => m.DersIntibakiPageModule)
  },
  {
    path: 'basvuru-devam-eden',
    loadChildren: () => import('./basvuru-devam-eden/basvuru-devam-eden.module').then( m => m.BasvuruDevamEdenPageModule)
  },
  {
    path: 'basvuru-bitenler',
    loadChildren: () => import('./basvuru-bitenler/basvuru-bitenler.module').then( m => m.BasvuruBitenlerPageModule)
  },
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
