import {
  Component,
  OnInit
} from '@angular/core';
import {
  AngularFireAuth
} from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/compat/firestore';
import {
  AngularFireStorage,
  AngularFireUploadTask
} from '@angular/fire/compat/storage';
import {
  Router
} from '@angular/router';
import {
  LoadingController
} from '@ionic/angular';
import firebase from 'firebase/compat/app';
import {
  Observable
} from 'rxjs';
import {
  AuthService
} from 'src/app/services/auth.service';
@Component({
  selector: 'app-yaz-okulu-basvuru',
  templateUrl: './yaz-okulu-basvuru.page.html',
  styleUrls: ['./yaz-okulu-basvuru.page.scss'],
})
export class YazOkuluBasvuruPage implements OnInit {

  fakulteler: any;
  fakulteAd : any;
  constructor(private database: AngularFirestore, private authservice: AuthService, private storage: AngularFireStorage,
    private router: Router) {
      this.fetchAllData();
   }
  
  ngOnInit() {
      
  }
 
   fetchAllData() {
    firebase.database().ref('fakulteler').once('value',function(snapshot){
      snapshot.forEach(
        function(ChildSnapshot) {
          let fakulteAd = ChildSnapshot.val().fakulteAd;
        }
      )
    })
  }

}



