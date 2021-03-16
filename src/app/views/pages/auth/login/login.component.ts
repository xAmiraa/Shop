import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { AccountController } from 'src/app/core/APIs/AccountController';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseService implements OnInit {

  returnUrl: any;
  form: FormGroup;

  constructor(public injector: Injector, private formBuilder: FormBuilder) {
    super(injector);
  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.form = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(320)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(320)]),
    });
  }

  onSubmit() {
    const controls = this.form.controls;
    /** check form */
    if (this.form.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    this.showSpinner();

    const body = this.form.value;

    this.httpService.POST(AccountController.Login, body)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        if (res.isPassed) {
          const token = res.data;
          this.authService.updateToken(token);
          this.spinner.hide();
          this.router.navigate(['/']);
        } else {
          console.log('Error: ', res.message);
          this.spinner.hide();
        }
      });
  }

}
