import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  sortDirection = 'asc';

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

  onsort(column: string) {
    let order = -1;
    if (this.sortDirection === 'asc') {
      order = -1;
      this.sortDirection = 'desc';
    } else {
      order = 1;
      this.sortDirection = 'asc';
    }

    if (column === 'firstName') {
      this.users = this.users.sort((a, b) => a.firstName < b.firstName ? -order : order);
    }
    if (column === 'familyName') {
      this.users = this.users.sort((a, b) => a.familyName < b.familyName ? -order : order);
    }
    if (column === 'userName') {
      this.users = this.users.sort((a, b) => a.userName < b.userName ? -order : order);
    }
  }

  onDelete(user: User) {
    this.userService.deleteUser(user);
  }
}
