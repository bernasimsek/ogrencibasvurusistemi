import {
  Component
} from '@angular/core';
import {
  AngularFirestore
} from '@angular/fire/compat/firestore';
import {
  Router
} from '@angular/router';
import {
  StatusBar
} from '@capacitor/status-bar';
import {
  Platform
} from '@ionic/angular';
import firebase from 'firebase/compat/app';
import {
  AuthService
} from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  num: any;
  profileEmail: any;
  public appPages = [
    {
      title: 'Profil',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Yaz Okulu Başvurusu',
      url: '/yaz-okulu-basvuru',
      icon: 'create'
    },
    {
      title: 'Yatay Geçiş Başvurusu',
      url: '/yatay-gecis-basvuru',
      icon: 'create'
    },
    {
      title: 'DGS Başvurusu',
      url: '/dgs-basvuru',
      icon: 'create'
    },
    {
      title: 'ÇAP Başvurusu',
      url: '/cap-basvuru',
      icon: 'create'
    },
    {
      title: 'Ders İntibakı Başvurusu',
      url: '/ders-intibaki',
      icon: 'create'
    },
  ];
  public labels = [{
      title: 'Başvurusu Bitenler',
      url: '/basvuru-bitenler',
      icon: 'checkbox'
    },
    {
      title: 'Başvurusu Devam Edenler',
      url: '/basvuru-devam-eden',
      icon: 'square'
    },
  ]

  public signout = [{
    title: 'Çıkış',
    url: '/home',
    icon: 'signout'
  }]
  constructor(
    private database: AngularFirestore,
    private authService: AuthService,
    private router: Router) {

    firebase.auth().onAuthStateChanged(user => {
      //   console.log("AUTH_USER::::::", user);

      if (user) {
        // console.log("USER::::",user)
        const result = this.database.doc(`/user/${this.authService.getUserUid()}`);
        var userprofile = result.valueChanges();
        userprofile.subscribe(profile => {
          //console.log("PROFILE::", profile);
          this.num = profile['num'];
          this.profileEmail = profile['email'];
        })
      }
    })

  }

}
