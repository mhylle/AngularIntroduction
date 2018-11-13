import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListContentComponent} from './list-content.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

describe('ListContentComponent', () => {
  let component: ListContentComponent;
  let fixture: ComponentFixture<ListContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListContentComponent],
      imports: [AngularFontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
