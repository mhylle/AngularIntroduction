import {EventEmitter, Injectable, Output} from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output()
  userAdded: EventEmitter<User[]> = new EventEmitter<User[]>();

  @Output()
  userDeleted: EventEmitter<User[]> = new EventEmitter<User[]>();

  @Output()
  usersFound: EventEmitter<User[]> = new EventEmitter<User[]>();

  users: User[] = [];

  constructor(private http: HttpClient) {
  }

  create(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user);

  }

  getByUserName(userName: string): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users?userName=' + userName);
  }

  getByName(firstName: string, familyName: string): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users?firstName=' + firstName + '&familyName=' + familyName);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  deleteUser(user: User) {
    this.http.delete<User[]>('http://localhost:3000/users/' + user.id).subscribe(value => {
      this.getUsers().subscribe(value1 => this.userDeleted.emit(value1));
    });
  }
}
