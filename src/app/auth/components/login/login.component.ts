import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';

// import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authError: any;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    // this.auth.eventAuthError$.subscribe( data => {
    //   this.authError = data;
    // });
    this.loginForm = this.fb.group({
      userName: [''],
      password: [''],
    });
  }

  login(frm) {
    // this.auth.login(frm.value.email, frm.value.password);
  }
  onLogin(value){
    console.log('loginForm',value);
    // this.commonService.getProfiles().subscribe(res => {
    //   console.log('profiles',res);
    //   for(let i=0; i<res.length; i++){
    //      if(res[i].userName == value.userName){
    //       console.log('res[i].userName',res[i].userName);
    //       console.log('value.userName',value.userName);
    //       console.log('matched');
    //       this.router.navigateByUrl('/dashboard/old-farmer');
    //     }
    //   }
    // })
    // this.commonService.postProfile(value);
    // this.router.navigateByUrl('/dashboard/new-farmer');
  }

}