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

  export interface imageData {
    fileName: string;
    filePath: string;
    size: string;
  }
  @Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
  })
  export class ProfilePage implements OnInit {
    profile: any;
    profileName: any;
    profileImageUrl: any;
    profileEmail: any;
    phone: any;
    num: any;
    lastname:any;
    fileName: string;
    fileSize: string;
    isLoading: boolean;
    isLoaded: boolean;
    private imageCollection: AngularFirestoreCollection < imageData > ;
    imagefile: Observable < imageData[] > ;
    imageUpload: AngularFireUploadTask;
    percentage: Observable < number > ;
    snapshot: Observable < any > ;
    FileImageUPload: Observable < any > ;
    UserUID: AngularFirestoreDocument;
    constructor(private database: AngularFirestore, private authservice: AuthService, private storage: AngularFireStorage,
      private router: Router, private loading: LoadingController) {
      this.isLoading = false;
      this.isLoaded = false;
      this.imageCollection = this.database.collection < imageData > ('loginUploads');
      this.imagefile = this.imageCollection.valueChanges();
      firebase.auth().onAuthStateChanged(user => {
        //console.log("AUTH_USER", user);

        if (user) {
          const result = this.database.doc(`/user/${this.authservice.getUserUid()}`);
          var userprofile = result.valueChanges();
          userprofile.subscribe(profile => {
           // console.log("PROFILE::", profile);
            this.profileName = profile['name'];
            this.profileImageUrl = profile['photoUrl'];
            this.profileEmail = profile['email'];
            this.phone = profile['phone'];
            this.num = profile['num'];
            this.lastname = profile['lastname'];
          })

        }
      })
    }

    ngOnInit() {}

    async uploadImagetoFirebase(event) {

      const load = await this.loading.create({
        spinner: 'dots',
      })
      load.present();

      const file = event.target.files;
     // console.log(file);
      var fileName = file[0];
      //console.log(fileName);

      if (fileName.type.split('/')[0] !== "image") {
        console.error("File is not an Image");
        return;
      }

      this.isLoading = true;
      this.isLoaded = false;

      const path = `loginUploads/${new Date().getTime()}_${fileName.name}`;

      var fileRef = this.storage.ref(path);

      this.imageUpload = this.storage.upload(path, fileName);
      this.loading.dismiss();

      this.percentage = this.imageUpload.percentageChanges();
      this.imageUpload.then(res => {
        var imagefile = res.task.snapshot.ref.getDownloadURL();
        imagefile.then(downloadableUrl => {
         // console.log("URL", downloadableUrl);
          this.database.doc(`user/${this.authservice.getUserUid()}`).update({
            photoUrl: downloadableUrl
          })
        })
      })
    }
  

  }