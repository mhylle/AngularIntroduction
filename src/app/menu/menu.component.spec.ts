import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {AppRoutingModule} from '../app-routing.module';
import {UserListComponent} from '../Users/user-list/user-list.component';
import {UserCreateComponent} from '../Users/user-create/user-create.component';
import {UserSearchComponent} from '../Users/user-search/user-search.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ContextComponent} from '../context/context.component';
import {ListHeaderComponent} from '../Users/user-list/list-header/list-header.component';
import {ListContentComponent} from '../Users/user-list/list-content/list-content.component';
import {FormsModule} from '@angular/forms';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent,
        UserListComponent,
        UserCreateComponent,
        UserSearchComponent,
        ContextComponent,
        ListHeaderComponent,
        ListContentComponent],
      imports: [AppRoutingModule, AngularFontAwesomeModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
