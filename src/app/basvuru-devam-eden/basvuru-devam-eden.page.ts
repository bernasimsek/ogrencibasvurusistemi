import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Fakulteler } from '../yaz-okulu-basvuru/yaz-okulu-basvuru.page';

@Component({
  selector: 'app-basvuru-devam-eden',
  templateUrl: './basvuru-devam-eden.page.html',
  styleUrls: ['./basvuru-devam-eden.page.scss'],
})
export class BasvuruDevamEdenPage implements OnInit {
  fakulteler: Observable<Fakulteler[]>;
  fakulteAd:any;
  bolumAd:any;
  ad:any;
  soyad:any;
  no:any;
  fakulteCollection: AngularFirestoreCollection<Fakulteler>;
  constructor(
    private alertCtrl: AlertController,
    public afAuth: AngularFireAuth,
     private database: AngularFirestore, 
     private authservice: AuthService,
      private storage: AngularFireStorage,
    private router: Router
  ) {
    this.afAuth.signInAnonymously();
    this.fakulteCollection = this.database.collection('fakulteler'); 
    this.fakulteler = this.fakulteCollection.valueChanges();
   }

  ngOnInit() {
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
