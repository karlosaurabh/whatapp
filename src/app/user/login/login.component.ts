import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: any;
  public password: any;
  constructor(
    private appService: AppService,
    private route: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }
  goToSignUp() {
    this.route.navigate(['\sign-up'])
  }

  signinFunction() {
    if (!this.email) {
      this.toastr.warning('Enter the Email Id');
    } else if (!this.password) {
      this.toastr.warning('Enter the Password');
    } else {
      let data = {
        email: this.email,
        password: this.password
      }
      this.appService.loginFunction(data).subscribe(
        (data) => {

          if (data.status === 200) {
            let myItemStatus = localStorage.setItem('status', data.status);
            this.toastr.success('You successfully Login!');
            setTimeout(() => {
              this.route.navigate(['\chat'])
            }, 2000)
          }
        }, (error) => {
          this.toastr.success(error);
        }
      )
    }

  }
}
