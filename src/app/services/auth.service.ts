import { Injectable } from '@angular/core';
import { Auth, authState, getIdToken, User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userAccessSubject = new Subject<{
    headers: {
      'Content-Type': string;
      Authorization: string;
    };
  }>();

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth
      .signInAnonymously()
      .then((credentials) => {
        return credentials.user?.getIdToken();
      })
      .then((token) => {
        this.userAccessSubject.next({
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
      })
      .catch(() => {
        console.warn('Login failed!');
      });
  }

  getAuthHeaders(): Observable<{
    headers: { 'Content-Type': string; Authorization: string };
  }> {
    return this.userAccessSubject.asObservable();
  }
}
