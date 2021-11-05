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
  AlertController,
  LoadingController
} from '@ionic/angular';
import firebase from 'firebase/compat/app';
import {
  Observable
} from 'rxjs';
import {
  AuthService
} from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';

export interface Fakulteler {
  fakulteAd: any;
  bolumler: any;
 
 }
@Component({
  selector: 'app-yaz-okulu-basvuru',
  templateUrl: './yaz-okulu-basvuru.page.html',
  styleUrls: ['./yaz-okulu-basvuru.page.scss'],
})
export class YazOkuluBasvuruPage implements OnInit {
  //akulteler$: Observable<Fakulteler[]>;
  fakulteler: Observable<Fakulteler[]>;
  fakulteAd:any;
  bolumAd:any;
  ad:any;
  soyad:any;
  no:any;

  fakulteCollection: AngularFirestoreCollection<Fakulteler>;
  constructor(public loadingCtrl: LoadingController, private alertCtrl: AlertController,public afAuth: AngularFireAuth, private database: AngularFirestore, private authservice: AuthService, private storage: AngularFireStorage,
    private router: Router) {

    this.afAuth.signInAnonymously();
    this.fakulteCollection = this.database.collection('fakulteler'); 
    this.fakulteler = this.fakulteCollection.valueChanges();
 
      /*this.fakulteler$ = this.database.collection<Fakulteler>('fakulteler')
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Fakulteler;
          const id = a.payload.doc.id;
          return {...data};
        }))
      );*/
   }
  
  ngOnInit() {
    //this.fakulteler$.subscribe(data => console.log(Array.from(data.values())[0]));
  }
   add(){
    this.showalert();
     try{
      this.database.collection("basvurular").add({
        'fakulteAd':this.fakulteAd,
        'bolumAd':this.bolumAd,
        'ad':this.ad,
        'soyad':this.soyad,
        'no':this.no,
     })
     this.uploadAppl();
    }
     catch(err){
        console.log(err);
     }
    
   
   
   }async showalert() {
    var load = await this.alertCtrl.create({
      message: 'Başvurunuz Yapıldı',
    })
    load.present();
  }

  async uploadAppl() {
 
        this.database.doc(`user/${this.authservice.getUserUid()}`).update({
          basvuru: 'yaz okulu basvurusu yapıldı'
        })
       
     
  }
}



