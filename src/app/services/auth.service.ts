import { Injectable } from '@angular/core';
import { Auth, authState, getIdToken, User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, Subject, filter, from, map, of, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userAccessSubject = new Subject<{ headers: {} }>();

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth
      .signInAnonymously()
      .then(() => {
        this.userAccessSubject.next({
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.afAuth.idToken}`,
          },
        });
      })
      .catch(() => {
        console.warn('Login failed!');
      });
  }

  getAuthHeaders(): Observable<{ headers: {} }> {
    return this.userAccessSubject.asObservable();
  }
}
