import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profil', url: '/profile', icon: 'person' },
    { title: 'Yaz Okulu Başvurusu', url: '/yaz-okulu-basvuru', icon: 'create' },
    { title: 'Yatay Geçiş Başvurusu', url: '/folder/YatayGecisBasvuru', icon: 'create' },
    { title: 'DGS Başvurusu', url: '/folder/DGSBasvuru', icon: 'create' },
    { title: 'ÇAP Başvurusu', url: '/folder/CAPBasvuru', icon: 'create' },
    { title: 'Ders İntibakı Başvurusu', url: '/folder/DersIntibaki', icon: 'create' },
  ];
  public labels = ['Başvurusu Bitenler', 'Başvurusu Devam Edenler'];
  constructor() {}
}
