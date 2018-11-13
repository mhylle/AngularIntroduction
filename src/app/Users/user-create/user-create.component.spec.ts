import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserCreateComponent} from './user-create.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCreateComponent],
      imports: [FormsModule,  HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
