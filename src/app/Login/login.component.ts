import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  public loginForm:FormGroup;
  //variables
  public username:string;
  public password:string;

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['',Validators.required], // <--- the FormControl called "username"
      password: ['',Validators.required]
    });
  }

  public login() {
    if(this.username === "admin" && this.password === "admin"){
      this.router.navigateByUrl('/leftnav');
    }else{
      alert("Invalid credentials");
    }
  }

  public forgot(){
    alert("function have not finished");
  }
}
