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

  users: User[] = [];

  constructor(private http: HttpClient) {
  }

  create(user: User) {
    this.http.post('http://localhost:3000/users', user).subscribe(value => console.log('user added' + value));
    this.userAdded.emit(this.users);
  }

  getByShortName(shortName: string): User {
    const user = this.users.filter(value => value.userName === shortName);
    return user.length > 0 ? user[0] : null;
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
