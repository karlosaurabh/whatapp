import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public mobile: number;
  public email: any;
  public password: any;
  public apiKey: any;

  constructor(
    private appService: AppService,
    private route: Router,
    private toastr: ToastrService
  ) {
    console.log("sign up component is called");
  }

  ngOnInit() {
    this.toastr.success('This is not good!', 'Oops!');
  }

  goToSignIn() {
    this.route.navigate(['\login'])
  }

  signupFunction: any = () => {
    if (!this.firstName) {
      this.toastr.warning('Enter the first name!');
    } else if (!this.lastName) {
      this.toastr.warning('Enter the last name!');
    } else if (!this.lastName) {
      this.toastr.warning('Enter the mobile!');
    } else if (!this.mobile) {
      this.toastr.warning('Enter the mobile!');
    } else if (!this.email) {
      this.toastr.warning('Enter the email!');
    } else if (!this.password) {
      this.toastr.warning('Enter the password!');
    } else if (!this.apiKey) {
      this.toastr.warning('Enter the apiKey!');
    } else {
      let data = {
        first: this.firstName,
        lastName: this.lastName,
        mobile: this.mobile,
        email: this.email,
        password: this.password,
        apiKey: this.apiKey
      }
      console.log("form data", data)
      this.appService.signupFunction(data).subscribe(
        (data) => {
          console.log("this is the service", data);
          if (data.status === 200) {
            this.toastr.success('You Successfully Part of Chat');
            setTimeout(() => {
              this.route.navigate(['\login']);
            }, 2000)
          }
        }

      );
    }

  }//signup function end

}
