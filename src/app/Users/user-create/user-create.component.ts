import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  @Output()
  add: EventEmitter<User> = new EventEmitter();

  newUser: User = new User();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  create() {
    console.log('create');
    this.userService.create(this.newUser);
    this.add.emit(this.newUser);
    this.newUser = new User();
  }
}
