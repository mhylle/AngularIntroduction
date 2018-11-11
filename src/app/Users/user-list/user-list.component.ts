import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(value => this.users = value);
    this.userService.userAdded.subscribe((result) => {
      this.users = result;
    });
    this.userService.userDeleted.subscribe((result) => {
      this.users = result;
    });
  }

  view(user: User) {
    // todo
  }

  delete(user: User) {
    this.userService.deleteUser(user);
  }

}
