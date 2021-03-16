import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { getStoredData, LoggedInUser } from '../models/security/User';

@Injectable()
export class AuthService {
  // logged in user
  public loggedInUser$: BehaviorSubject<LoggedInUser> = new BehaviorSubject<LoggedInUser>(null);

  // loadingAction
  public loadingAction$: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  constructor(private router: Router) {
    this.loggedInUser$.next(getStoredData()?.user);
    this.loadingAction$.next(false);
  }


  // store user data after login succeffully
  updateStoredUserInfo(userData) {
    let storedData = JSON.parse(localStorage.getItem('costing_user')) || {};
    storedData.user = userData
    localStorage.setItem('costing_user', JSON.stringify(storedData));

    this.loggedInUser$.next(storedData.user);
  }

  updateToken(token: string) {
    let storedData = JSON.parse(localStorage.getItem('costing_user')) || {};
    storedData.token = 'Bearer ' + token;
    localStorage.setItem('costing_user', JSON.stringify(storedData));
  }

  // logout
  logout() {
    // localStorage.clear();
    localStorage.removeItem('costing_user');
    this.router.navigate(['/auth/login']);
  }

  // loading action
  ActionLoading(val: boolean) {
    this.loadingAction$.next(Boolean(val));
  }

}
