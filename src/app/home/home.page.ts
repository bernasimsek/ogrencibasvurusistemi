import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  validationUserMessage ={
    email:[
      {type:"required", message: "Please enter your email"},
      {type:"pattern", message: "The email is incorrect try again."}
    ],
    password:[ 
      {type:"required" ,message :"Please enter your password"},
      {type:"minlength",message:"The password must be at least 5 characters or more"}
    ]
  }
   validationFormUser: FormGroup;
 
  constructor(public formbuilder: FormBuilder, public authService: AuthService,private router: Router,
    private nav: NavController, private firestore: AngularFirestore,) {
      authService.logout();
     }

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email : new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password : new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5) 
      ]))
    })
  }
  LoginUser(value){
    try{
     this.authService.loginFireauth(value).then( resp => {
       //  console.log(resp);
         this.authService.setUser({
           username: resp.user.displayName,
           uid:resp.user.uid
         })
         if(resp.user){
         
           const userProfile = this.firestore.collection('user').doc(resp.user.uid);
 
           userProfile.get().subscribe(result =>{
             if(result.exists){
               this.nav.navigateForward(['profile'])
             }else{
                this.firestore.doc(`user/${this.authService.getUserUid()}`).set({
                  name:resp.user.displayName,
                  email:resp.user.email
               });
               
             }
           })
         }
     })
    }catch(err){
       console.log(err)
    }  
  }

}
