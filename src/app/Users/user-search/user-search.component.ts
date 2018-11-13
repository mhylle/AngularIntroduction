import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {SearchModel} from './search-model';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  searchModel: SearchModel = new SearchModel();
  searchResult: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.usersFound.subscribe((result) => {
      if (result && result.length > 0) {
        this.searchResult = result;
      }
    });
  }

  search() {
    this.doSearch();
  }

  private doSearch() {
    this.userService.getByName(this.searchModel.firstName, this.searchModel.familyName);
  }
}
