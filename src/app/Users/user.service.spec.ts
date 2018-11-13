import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

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
});
