import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../user';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.css']
})
export class ListContentComponent implements OnInit {

  @Input()
  users: User[];

  @Output()
  delete: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  view: EventEmitter<User> = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit() {

  }

  select(user: User) {
    this.view.emit(user);
  }

  doDelete(user: User) {
    this.delete.emit(user);
  }
}
