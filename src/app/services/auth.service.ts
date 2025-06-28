import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthUser } from './models/user-access.model';
@Injectable({ providedIn: 'root' })
export class AuthService {
  userAccess$ = new BehaviorSubject<AuthUser>({
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${null}`,
    },
  });
  constructor(public afAuth: AngularFireAuth) {
    // this.afAuth
    //   .signInAnonymously()
    //   .then((credentials) => {
    //     return credentials.user?.getIdToken();
    //   })
    //   .then((token) => {
    //     this.userAccess$.next({
    //       headers: {
    //         'Content-Type': 'application/json',
    //         authorization: `Bearer ${token}`,
    //       },
    //     });
    //   })
    //   .catch((err) => {
    //     console.warn('Login failed!');
    //     console.log(err);
    //   });
  }

  getAuthHeaders(): Observable<AuthUser> {
    return this.userAccess$;
  }
}
