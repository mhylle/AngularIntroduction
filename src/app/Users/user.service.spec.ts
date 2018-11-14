import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ResponseOptions} from "@angular/http";
import {User} from "./user";

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the data successfully', () => {
    service.getUsers().subscribe((value) => {
      expect(value.length).toBe(1);
    });

    const req = httpMock.expectOne('http://localhost:3000/users');
    expect(req.request.method).toBe('GET');
    req.flush([{
      firstName: 'Peter',
      familyName: 'Petersen',
      userName: 'pts',
      id: 1
    }]);

    httpMock.verify();
  });

  it('should get a user by name', () => {
    service.getByName('Peter', 'Petersen').subscribe(value => {
      expect(value.firstName).toBe('Peter');
      expect(value.familyName).toBe('Petersen');
    });
    const req = httpMock.expectOne('http://localhost:3000/users?firstName=Peter&familyName=Petersen');
    expect(req.request.method).toBe('GET');
    req.flush({
      firstName: 'Peter',
      familyName: 'Petersen',
      userName: 'pts',
      id: 1
    });
    httpMock.verify();
  });

  it('should get a user by shortname', () => {
    service.getByUserName('pts').subscribe(value => {
      expect(value.firstName).toBe('Peter');
      expect(value.familyName).toBe('Petersen');
    });
    const req = httpMock.expectOne('http://localhost:3000/users?userName=pts');
    expect(req.request.method).toBe('GET');
    req.flush({
      firstName: 'Peter',
      familyName: 'Petersen',
      userName: 'pts',
      id: 1
    });
    httpMock.verify();
  });

  // it('should be able to create a user', () => {
  //   const responseForm = '<form />';
  //   let newUser = new User();
  //   newUser.firstName = 'Jan';
  //   newUser.familyName = 'Testerson';
  //   newUser.userName = 'jte';
  //   newUser.id = 123;
  //   let userCreateResponse;
  //   service.create(newUser).subscribe(response => {
  //     userCreateResponse = response;
  //     console.log(response);
  //   });
  //   httpMock.expectOne({
  //     url: 'http://localhost:3000/users',
  //     method: 'POST'
  //   }).flush(responseForm);
  //   expect(userCreateResponse).toEqual('abc');
  // })
});
