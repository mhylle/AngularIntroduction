import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserSearchComponent} from './user-search.component';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {UserService} from '../user.service';

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserSearchComponent],
      imports: [FormsModule, HttpClientTestingModule]
    })
      .compileComponents();
    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should be able to search', () => {
  //   component.searchModel.firstName = 'Peter';
  //   component.searchModel.familyName = 'Petersen';
  //   component.search();
  //
  //   const req = httpMock.expectOne('http://localhost:3000/users?firstName=Peter&familyName=Petersen');
  //   expect(req.request.method).toBe('GET');
  //   req.flush({
  //     firstName: 'Peter',
  //     familyName: 'Petersen',
  //     userName: 'pts',
  //     id: 1
  //   });
  //   expect(component.searchResult).toBeDefined();
  //   httpMock.verify();
  // });
});
