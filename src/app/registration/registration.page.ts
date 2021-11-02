  import {
    Component,
    OnInit
  } from '@angular/core';
  import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
  } from '@angular/forms';
  import {
    AuthService
  } from '../services/auth.service';
  import {
    AlertController,
    NavController,
    LoadingController
  } from '@ionic/angular'
  import {
    Router
  } from '@angular/router';
  import {
    AngularFirestore
  } from '@angular/fire/compat/firestore';
  import {
    AngularFireAuth
  } from '@angular/fire/compat/auth';

  @Component({
    selector: 'app-registration',
    templateUrl: './registration.page.html',
    styleUrls: ['./registration.page.scss'],
  })
  export class RegistrationPage implements OnInit {

    name: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    num: string;
    address: string;
    birthDate: string;
    section: string;
    faculty: string;
    class: string;
    university: String;
    ID: string;


    loading: any;
    constructor(private afauth: AngularFireAuth, private formBuilder: FormBuilder, private afs: AngularFirestore, private authService: AuthService, public loadingCtrl: LoadingController, private alertCtrl: AlertController,
      private navCtr: NavController, private router: Router) {
      this.loading = this.loadingCtrl
    }

    ngOnInit() {}

    async register() {
      this.showalert();
      try {
        this.afauth.createUserWithEmailAndPassword(this.email, this.password).then((data) => {
          this.afs.collection('user').doc(data.user.uid).set({
            'id': data.user.uid,
            'name': this.name,
            'lastname': this.lastname,
            'email': this.email,
            'phone': this.phone,
            'num': this.num,
            'address': this.address,
            'birthDate': this.birthDate,
            'section': this.section,
            'faculty': this.faculty,
            'class': this.class,
            'university': this.university,
            'ID': this.ID,
            'createdAt': Date.now(),
          })

          this.router.navigate(['home']);
        })
      } catch (err) {
        console.log(err);
      }
    }

    async showalert() {
      var load = await this.alertCtrl.create({
        message: 'please wait..',
      })
      load.present();
    }
  }